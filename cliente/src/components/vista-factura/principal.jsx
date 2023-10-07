import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Background, ContPrincipal, ContFactura, ResPrecios, BotonImprimir } from "./styled";
import mesaFunctions from "../vista-mesa/mesa.services/mesa.services";
import { useDataState } from "../vista-mesa/data.context/data.state.context";
import axios from "axios";
import moment from 'moment';
import { Pago } from "../payu/principal";

const Factura = (props) => {
    const { mesa } = props;
    const navigate = useNavigate();
    const [total, setTotal] = useState(0);
    const [filteredReservas, setFilteredReservas] = useState([]);
    const [lastInsertedId, setLastInsertedId] = useState(null);
    const [numMesa, setNumMesa] = useState(0);
    const { mesaData } = useDataState();
    const mesaSeleccionada = mesa ?? mesaData[0]?.id_mesa;
    useEffect(() => {
        setFilteredReservas(mesaData);
        calculateTotal();
    }, [mesaData]);
    useEffect(() => {
        mesaFunctions.getAllMesa(mesaData)
            .then(response => {
                const convertedResponse = response.map(item => ({
                    ...item,
                    precio: parseFloat(item.precio),
                    cantidad: parseInt(item.cantidad),
                }));
                setFilteredReservas(convertedResponse);
                calculateTotal();
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [mesaData]);
    const calculateTotal = () => {
        const pedidosConProductos = mesaData.filter(
            (item) => item.producto && item.precio
        );
        const totalAmount = pedidosConProductos.reduce((accumulator, pedido) => {
            const precio = parseFloat(pedido.precio);
            if (!isNaN(precio)) {
                return accumulator + precio;
            }
            return accumulator;
        }, 0);
        setTotal(totalAmount);
    };

    const handleIrRegistroFact = async () => {
        try {
            const fecha_factura = moment().format('YYYY/MM/DD, HH:mm:ss a');
            const productos = mesaData.map((pedido) => ({
                producto: pedido.producto,
                cantidad: pedido.cantidad,
                precio: pedido.precio,
                fecha_factura,
            }));
            const facturaData = {
                id_mesa: mesaSeleccionada,
                productos,
                fecha_factura,
            };
            const response = await axios.post(`${process.env.REACT_APP_PRIMERO_UNO}/api/registro`, facturaData);
            if (response.status === 200) {
                const id_orden = response.data.numOrden;
                if (id_orden !== null && id_orden !== undefined) {
                    setNumMesa(id_orden);
                    await handleEliminarRegistros();
                } else {
                    console.error('id_mesa no es un número válido.');
                }
            } else {
                console.error('Error en la solicitud POST:', response.statusText);
            }
        } catch (error) {
            console.error('Error al procesar la factura:', error);
        }
    };

    const handleEliminarRegistros = async () => {
        try {
            if (!isNaN(mesaSeleccionada)) {
                const idMesaInt = parseInt(mesaSeleccionada);
                const response = await axios.delete(`${process.env.REACT_APP_PRIMERO_UNO}/api/mesa_id/${idMesaInt}`);
                if (response.status === 200) {
                    setNumMesa(idMesaInt);
                    navigate('/private/todofisica/fisica');
                } else {
                    console.error('Error al eliminar registros:', response.statusText);
                }
            } else {
                console.error('mesaSeleccionada no es un número válido.');
            }
        } catch (error) {
            console.error('Error al eliminar registros:', error);
        }
    };

    const handlePrintClick = () => {
        window.print();
    };

    useEffect(() => {
        const obtenerUltimoId = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/ultimo-id`);
                const ultimoId = response.data; 
                setLastInsertedId(ultimoId);
            } catch (error) {
                console.error('Error al obtener el último ID:', error);
            }
        };
        obtenerUltimoId();
    }, []);

    return (
        <Background>
            <ContPrincipal>
                <h1 style={{ textAlign: "center", color: "white" }}>Factura de Mesa {mesaSeleccionada}</h1>
                <BotonImprimir style={{ marginLeft: "20px", fontSize:"15px" }} onClick={() => navigate('/private/todofisica/mesa')}>Regresar</BotonImprimir>
                <ContFactura>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: "transparent", color: "white", fontSize:"20px" }}>PRODUCTO</th>
                                <th style={{ backgroundColor: "transparent", color: "white", fontSize:"20px" }}>CANTIDAD</th>
                                <th style={{ backgroundColor: "transparent", color: "white", fontSize:"20px" }}>PRECIO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReservas.map((pedido, index) => (
                                <tr key={index}>
                                    <td style={{ color: "white", fontSize:"20px" }}>{pedido.producto}</td>
                                    <td style={{ color: "white", fontSize:"20px" }}>{pedido.cantidad}</td>
                                    <td style={{ color: "white", fontSize:"20px" }}>${pedido.precio}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ContFactura>
                <ResPrecios>
                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                        <span style={{ fontWeight: 'bolder', fontSize: 'x-large', fontStyle: 'italic', margin: '0', color: "white" }}>Total: $ {total}</span>
                    </div>
                    {/* <Pago total={total} lastInsertedIdProp={parseInt(lastInsertedId, 10)} /> */}
                </ResPrecios>
                    <BotonImprimir onClick={handlePrintClick}>Imprimir factura</BotonImprimir>
                        <Link to="/private/todofisica/registro-fact">
                            <BotonImprimir id="registrarFacturaButton" onClick={handleIrRegistroFact}>Ir a registro de facturas</BotonImprimir>
                        <Link to="/private/todofisica/imprimir">
                            <BotonImprimir>Imprimir pedido</BotonImprimir>
                        </Link>
                    <BotonImprimir onClick={handleEliminarRegistros} style={{ marginTop: '20px' }}> Eliminar Registros de la Factura </BotonImprimir>
                    </Link>
            </ContPrincipal>
        </Background>
    );
};

export default Factura;