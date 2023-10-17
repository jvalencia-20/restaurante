import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Background, ContPrincipal, ContFactura, ResPrecios, ContBoton, BotonImprimir } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

const FacturaDomicilio = () => {
    const Navegate = useNavigate()
    const [total, setTotal] = useState(0);
    const [filteredReservas, setFilteredReservas] = useState([]);
    const [nombre, setNombre] = useState()
    const calculateTotal = (platos) => {
        const pedidosConProductos = platos.filter(item => item.nombre_plato && item.cantidad && item.precio);
        setNombre(pedidosConProductos[0].nombre_cliente)
        const subtotalAmount = pedidosConProductos.reduce((accumulator, pedido) => {
            const pedidoTotal = parseFloat(pedido.precio);
            return accumulator + pedidoTotal;
        }, 0);
        const totalAmount = subtotalAmount
        setTotal(totalAmount);
    };
    const Delete = () => {
        const parametro = di;
        const parametroCodificado = encodeURIComponent(parametro);
        Axios.delete(`${process.env.REACT_APP_PRIMERO_UNO}/api/quitar/${parametroCodificado}`)
        .catch(error => {
        })
    }
    const handlePrintClick = () => {
        window.print();
    };

    const Domicilios = () => {
        const parametro = di;
        const parametroCodificado = encodeURIComponent(parametro); 
        Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/domicilio/${parametroCodificado}`).then((response) => {
            setFilteredReservas(response.data)
            calculateTotal(response.data)
        })
            .catch(error => {
            })
    }
    useEffect(() => {
        Domicilios()
    }, [])

    const envia = () => {
        const parametro = di;
        const parametroCodificado = encodeURIComponent(parametro);
        Navegate(`/private/todofisica/imprimirdomicilio/${parametroCodificado}`)
    }
    const { di } = useParams();
    const enviarDatosARegistrosDomicilio = async () => {
        const dataDomicilio = {
            table: "domicilio",
            rows: filteredReservas,
        };
        const dataRegistrosDomicilio = dataDomicilio.rows.map((domicilio) => {
            return {
                nombre_cliente: domicilio.nombre_cliente,
                producto: domicilio.nombre_plato,
                cantidad: domicilio.cantidad,
                precio: domicilio.precio,
                direccion: domicilio.direccion,
                fecha_domi: fechaActual,
            };
        });
        try {
            const responseRegistrosDomicilio = await Axios.post(
                `${process.env.REACT_APP_PRIMERO_UNO}/api/reg_domi`,
                { table: "registros_domicilio", rows: dataRegistrosDomicilio }
            );
            if (responseRegistrosDomicilio.status === 200) {
                Navegate(`/private/todofisica/registrosdomi`);
            } else {
                console.error("Error al agregar datos de domicilio a registros_domicilio.");
            }
        } catch (error) {
            console.error("Error al comunicarse con el servidor:", error);
        }
    };
    const fechaActual = moment().format('YYYY-MM-DD HH:mm:ss'); 

    return (
        <Background>
            <ContPrincipal>
                <h1 style={{ textAlign: "center", color: "white" }}>Factura Domicilio </h1>
                <ContFactura>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: "transparent", color: "white",fontSize:"20px" }}>PRODUCTO</th>
                                <th style={{ backgroundColor: "transparent", color: "white",fontSize:"20px" }}>CANTIDAD</th>
                                <th style={{ backgroundColor: "transparent", color: "white",fontSize:"20px" }}>PRECIO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReservas.map((pedido, index) => (
                                <tr key={index}>
                                    <td style={{ color: "white",fontSize:"20px" }}>{pedido.nombre_plato}</td>
                                    <td style={{ color: "white",fontSize:"20px" }}>{pedido.cantidad}</td>
                                    <td style={{ color: "white",fontSize:"20px" }}>{pedido.precio}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ContFactura>
                <ResPrecios>
                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                        <p style={{ fontWeight: 'bolder', fontSize: 'x-large', fontStyle: 'italic', margin: '0', color: "white" }}>Cliente: {nombre}</p>
                        <p style={{ fontWeight: 'bolder', fontSize: 'x-large', fontStyle: 'italic', margin: '0', color: "white" }}>Total: $ {total}</p>
                    </div>
                </ResPrecios>
                <ContBoton>
                    <BotonImprimir onClick={handlePrintClick}>Imprimir factura</BotonImprimir>
                    <BotonImprimir onClick={envia}>Imprimir pedido </BotonImprimir>
                    <Link to="/private/todofisica/fisica">
                        <BotonImprimir onClick={Delete}>Eliminar Factura</BotonImprimir>                                
                    </Link>
                    <BotonImprimir onClick={enviarDatosARegistrosDomicilio}>
                        Ir a Registro de Domicilio
                    </BotonImprimir>
                    <Link to="/private/todofisica/selectfactura">
                        <BotonImprimir style={{width:"5rem",height:"2rem"}}>regresar</BotonImprimir>
                    </Link>
                </ContBoton>
            </ContPrincipal>    
        </Background>
    );
};

export default FacturaDomicilio;