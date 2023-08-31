import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Background,
    ContPrincipal,
    ContFactura,
    ResPrecios,
    ContBoton,
    BotonImprimir,
} from "./styled";
import mesaFunctions from "../vista-mesa/mesa.services/mesa.services";
import { useDataState }  from "../vista-mesa/data.context/data.state.context";

const Factura = ({ mesa }) => {
    const navigate = useNavigate()
    const [subtotal, setSubtotal] = useState(0);
    const [impuesto, setImpuesto] = useState(0);
    const [total, setTotal] = useState(0);
    const [filteredReservas, setFilteredReservas] = useState([]);
    const { mesaData } = useDataState();

    useEffect(() => {
        setFilteredReservas(mesaData);
        calculateTotal(); 
    }, [mesaData]);
    
    useEffect(() => {
    mesaFunctions.getAllMesa(mesa)
        .then(response => {
            console.log('Response from mesaFunctions:', response);

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
    const pedidosConProductos = mesaData.filter(item => item.producto && item.cantidad && item.precio);

    const subtotalAmount = pedidosConProductos.reduce((accumulator, pedido) => {
        const pedidoTotal = parseFloat(pedido.precio) * pedido.cantidad;
        return accumulator + pedidoTotal;
    }, 0);

    const impuestoAmount = subtotalAmount * 0.08;
    const totalAmount = subtotalAmount + impuestoAmount;

    setSubtotal(subtotalAmount);
    setImpuesto(impuestoAmount);
    setTotal(totalAmount);
};

const handlePrintClick = () => {
    window.print(); 
};


    return (
        <Background>
            <ContPrincipal>
                <h1 style={{ textAlign: "center" }}>Factura de Mesa {mesa}</h1>
                <BotonImprimir style={{marginLeft: "20px"}} onClick={() => navigate('/mesa')}>Regresar</BotonImprimir>
                <ContFactura>
                    <table>
                        <thead>
                            <tr>
                                <th>PRODUCTO</th>
                                <th>CANTIDAD</th>
                                <th>PRECIO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReservas.map((pedido, index) => (
                                <tr key={index}>
                                    <td>{pedido.producto}</td>
                                    <td>{pedido.cantidad}</td>
                                    <td>{pedido.precio}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ContFactura>
                <ResPrecios>
                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                        <p style={{ fontWeight: 'bolder', fontSize: 'x-large', fontStyle: 'italic', margin: '0' }}>Subtotal: $ {subtotal}</p>
                        <p style={{ fontWeight: 'bolder', fontSize: 'large', fontStyle: 'italic', margin: '0' }}>Impuesto al consumo (8%): $ {impuesto}</p>
                        <p style={{ fontWeight: 'bolder', fontSize: 'x-large', fontStyle: 'italic', margin: '0' }}>Total: $ {total}</p>
                    </div>
                </ResPrecios>
                <ContBoton>
                    <BotonImprimir onClick={handlePrintClick}>Imprimir factura</BotonImprimir>
                </ContBoton>
            </ContPrincipal>
        </Background>
    );
};

export default Factura;