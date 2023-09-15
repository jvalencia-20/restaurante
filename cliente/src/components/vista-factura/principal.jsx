import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Background, ContPrincipal, ContFactura, ResPrecios, ContBoton, BotonImprimir } from "./styled";
import mesaFunctions from "../vista-mesa/mesa.services/mesa.services";
import { useDataState } from "../vista-mesa/data.context/data.state.context";
import axios from "axios";
import moment from 'moment';

const Factura = ({ mesa }) => {
    const navigate = useNavigate()
    const [total, setTotal] = useState(0);
    const [filteredReservas, setFilteredReservas] = useState([]);
    const [borrarFactura, setBorrarFactura] = useState(false);
    const { mesaData } = useDataState();
    const mesaSeleccionada = mesa ?? mesaData[0]?.id_mesa;
    useEffect(() => {
        setFilteredReservas(mesaData);
        calculateTotal();
    }, [mesaData]);
    useEffect(() => {
        mesaFunctions.getAllMesa(mesa)
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
    }, [mesa]);
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
        console.log(`Total: ${totalAmount}`);
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
            const response = await axios.post('http://localhost:3002/api/registro', facturaData);
            if (response.status === 200) {
                setBorrarFactura(true);
            } else {
                console.error('Error en la solicitud POST:', response.statusText);
            }
        } catch (error) {
            console.error('Error al procesar la factura:', error);
        }
    };

    useEffect(() => {
        if (borrarFactura) {
            axios.delete(`http://localhost:3002/api/orden/${mesaSeleccionada}`)
                .then((deleteOrdenResponse) => {
                    if (deleteOrdenResponse.status === 204) {
                        navigate('/private/todofisica/registro-fact');
                    } else {
                        console.error('Error al eliminar datos en la tabla orden:', deleteOrdenResponse.statusText);
                    }
                })
                .catch((deleteError) => {
                    console.error('Error al ejecutar la solicitud DELETE:', deleteError);
                });
        }
    }, [borrarFactura]);
    const handlePrintClick = () => {
        window.print();
    };

    return (
        <Background>
            <ContPrincipal>
                <h1 style={{ textAlign: "center" , color:"white" }}>Factura de Mesa {mesaSeleccionada}</h1>
                <BotonImprimir style={{marginLeft: "20px"}} onClick={() => navigate('/private/todofisica/mesa')}>Regresar</BotonImprimir>
                <ContFactura>
                    <table>
                        <thead>
                            <tr>
                                <th style={{backgroundColor:"transparent",color:"white"}}>PRODUCTO</th>
                                <th style={{backgroundColor:"transparent",color:"white"}}>CANTIDAD</th>
                                <th style={{backgroundColor:"transparent",color:"white"}}>PRECIO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReservas.map((pedido, index) => (
                                <tr key={index}>
                                    <td style={{color:"white"}}>{pedido.producto}</td>
                                    <td style={{color:"white"}}>{pedido.cantidad}</td>
                                    <td style={{color:"white"}}>{pedido.precio}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ContFactura>
                <ResPrecios>
                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                        <p style={{ fontWeight: 'bolder', fontSize: 'x-large', fontStyle: 'italic', margin: '0' , color:"white" }}>Total: $ {total}</p>
                    </div>
                </ResPrecios>
                <ContBoton>
                    <BotonImprimir onClick={handlePrintClick}>Imprimir factura</BotonImprimir>
                    <BotonImprimir onClick={handleIrRegistroFact}>Ir a registro de facturas</BotonImprimir>
                </ContBoton>
            </ContPrincipal>
        </Background>
    );
};

export default Factura;
