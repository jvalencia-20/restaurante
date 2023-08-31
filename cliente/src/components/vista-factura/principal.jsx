import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Background, CuadroFact, BotonImprimir, ContBoton, ContFact, Descripcion, Text, LogoImage, InfImp, ImgeImp } from "./styled";
import Logo from "../Img/LOgo.png";
import Axios from "axios";

export const Factura = () => {
    const [facturaDetalles, setFacturaDetalles] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [impuesto, setImpuesto] = useState(0);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        Axios.get("http://localhost:3002/api/factura")
            .then(response => {
                console.log("Datos de factura obtenidos:", response.data);
                setFacturaDetalles(response.data); 
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    useEffect(() => {
        const { subtotal, impuesto, total } = calculoFactura(facturaDetalles);
        setSubtotal(subtotal);
        setImpuesto(impuesto);
        setTotal(total);
    }, [facturaDetalles]);
    const calculoFactura = (detalles) => {
        if (detalles && Array.isArray(detalles) && detalles.length > 0) {
            const newSubtotal = detalles.reduce((accumulator, factura) => accumulator + parseFloat(factura.precio), 0);
            const newImpuesto = newSubtotal * 0.08;
            const newTotal = newSubtotal + newImpuesto;
            return { subtotal: newSubtotal, impuesto: newImpuesto, total: newTotal };
        } else {
            return { subtotal: 0, impuesto: 0, total: 0 };
        }
    };
    const navigate = useNavigate();
    const transferirDatosPosFactura = async () => {
        try {
            console.log("Datos a transferir:", facturaDetalles);
            const response = await Axios.post("http://localhost:3002/api/pos_factura", { facturaDetalles })
            console.log("Respuesta de la API:", response.data);
            console.log("Datos transferidos a pos_factura");
        } catch (error) {
            console.error("Error al transferir datos a pos_factura:", error);
        }
    };
    const borrarRegistros = async () => {
        try {
            await Axios.delete('http://localhost:3002/api/agrega_comida');
            await Axios.delete("http://localhost:3002/api/factura");
            console.log("Registros eliminados exitosamente");
        } catch (error) {
            console.error("Error al borrar los registros:", error);
        }
    };
    const volverVistaPrincipal = async () => {
        try {
            await transferirDatosPosFactura(facturaDetalles); 
            await borrarRegistros(); 
            navigate("/principal");
        } catch (error) {
            console.error("Error al realizar la operación:", error);
        }
    };
    return (
        <Background>
            <CuadroFact>
                <Descripcion>
                    <p>Nombre del plato</p>
                    <p>Cantidad</p>
                    <p>Precio</p>
                    <p>Mesa</p>
                </Descripcion>
                <ContFact>
                    {facturaDetalles.map((factura) => (
                        <div key={factura.id_plato} style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <p style={{ margin: '0' }}> {factura.nombre_plato}</p>
                        <p style={{ margin: '0' }}> {factura.cantidad}</p>
                        <p style={{ margin: '0' }}>$ {factura.precio}</p>
                        <p style={{ margin: '0' }}>{factura.mesa}</p>
                    </div>
                    ))}
                </ContFact>
                <Text>
                    <h2>Detalle impuestos</h2>
                </Text>
                <ImgeImp>
                    <LogoImage src={Logo} alt="Logo disfruta" />
                    <InfImp>
                        <div style={{ marginTop: '20px', textAlign: 'right' }}>
                            <p style={{ fontWeight: 'bolder', fontSize: 'x-large', fontStyle: 'italic', margin: '0' }}>Subtotal: $ {subtotal.toFixed(2)}</p>
                            <p style={{ fontWeight: 'bolder', fontSize: 'large', fontStyle: 'italic', margin: '0' }}>Impuesto al consumo (8%): $ {impuesto.toFixed(2)}</p>
                            <p style={{ fontWeight: 'bolder', fontSize: 'x-large', fontStyle: 'italic', margin: '0' }}>Total: $ {total.toFixed(2)}</p>
                        </div>
                    </InfImp>
                </ImgeImp>
                <ContBoton>
                    <BotonImprimir>Imprimir factura</BotonImprimir>
                    <BotonImprimir onClick={volverVistaPrincipal}>
                        Volver a la vista principal
                    </BotonImprimir>
                </ContBoton>
            </CuadroFact>
        </Background>
    );
};

