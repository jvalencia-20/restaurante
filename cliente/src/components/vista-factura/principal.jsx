import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import  Axios  from "axios";
import { useParams } from "react-router-dom";
import {Background,ContPrincipal,ContFactura,ResPrecios,ContBoton,BotonImprimir} from "./styled";

const Factura = ({ mesa }) => {
    // const navigate = useNavigate()

    const [subtotal, setSubtotal] = useState(0);  
    const [impuesto, setImpuesto] = useState(0);
    const [total, setTotal] = useState(0);
    const [filteredReservas, setFilteredReservas] = useState([]);
    const [nombre, setNombre] = useState()
    console.log(nombre,'🥗🥗😒');

    const calculateTotal = (platos) => {
    console.log("Calculando totales...");

    const pedidosConProductos = platos.filter(item => item.nombre_plato && item.cantidad && item.precio);
    console.warn(pedidosConProductos,'❤️❤️');
    setNombre(pedidosConProductos[0].nombre_cliente)
    console.log(pedidosConProductos[0].nombre_cliente,'😒😒🥗');
    const subtotalAmount = pedidosConProductos.reduce((accumulator, pedido) => {
        const pedidoTotal = parseFloat(pedido.precio) ;
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


    // cambio 

    const Domicilios = () => {
        const parametro = di;
        const parametroCodificado = encodeURIComponent(parametro); //Cuando creas una URL, ciertos caracteres, como espacios, signos de puntuación y otros caracteres especiales, deben codificarse para que sean interpretados correctamente por los servidores web y los navegadores. encodeURIComponent realiza esta codificación al reemplazar caracteres no seguros en la URL con su equivalente codificado en URL
        Axios.get(`http://localhost:3002/api/domicilio/${parametroCodificado}`).then((response) => {
            setFilteredReservas(response.data)
            calculateTotal(response.data)
            // console.log(response.data,'🚪🚪📝')
        })
        .catch(error => {
        })
    }


    useEffect(()=>{
    Domicilios()
    },[])

    const { di } = useParams(); 
    console.log(di,'🥗')
;

    return (
        <Background>
            <ContPrincipal>
                <h1 style={{ textAlign: "center" }}>Factura Domicilio {mesa}</h1>
                {/* <BotonImprimir style={{marginLeft: "20px"}} onClick={() => navigate('/mesa')}>Regresar</BotonImprimir> */}
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
                                    <td>{pedido.nombre_plato}</td>
                                    <td>{pedido.cantidad}</td>
                                    <td>{pedido.precio}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ContFactura>
                <ResPrecios>
                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                        <p style={{ fontWeight: 'bolder', fontSize: 'x-large', fontStyle: 'italic', margin: '0' }}>Cliente: {nombre}</p>
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