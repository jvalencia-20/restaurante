import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import {
    Background,
    ContPrincipal,
    InputContainer,
    Boton,
    Table,
    Thead,
    Tbody,
    Tr1,
    Tr2,
    Th,
    Td,
    TdMesa
} from "./styled";
import { Link } from "react-router-dom";

const RegistroFactura = () => {
    const [facturas, setFacturas] = useState([]);
    const [filtros, setFiltros] = useState({ mesa: null, fecha: null });
    const [totalPrecios, setTotalPrecios] = useState(0);
    useEffect(() => {
        const filtrarPorMesaYFecha = async () => {
            try {
                const response = await axios.get(`http://localhost:3002/api/registro/por-mesa-y-fecha/${filtros.mesa}/${moment(filtros.fecha).format('YYYY-MM-DD')}`);
                setFacturas(response.data);
            } catch (error) {
            }
        };
        const cargarTodosLosRegistros = async () => {
            try {
                const response = await axios.get("http://localhost:3002/api/registro");
                const total = response.data.reduce((accumulator, factura) => {
                    return accumulator + parseFloat(factura.precio);
                }, 0);
                setFacturas(response.data);
                setTotalPrecios(total);
            } catch (error) {
            }
        };
        if (filtros.mesa && filtros.fecha) {
            filtrarPorMesaYFecha();
        } else {
            cargarTodosLosRegistros();
        }
    }, [filtros]);
    
    const borrarFiltros = () => {
        setFiltros({ mesa: null, fecha: null });
    };
    
    const handleFiltroChange = (e) => {
        const { name, value } = e.target;
        setFiltros((prevFiltros) => ({
            ...prevFiltros,
            [name]: value
        }));
    };
    return (
        <Background>
            <div>
                <InputContainer>
                    <label>Mesa:</label>
                    <input type="text" name="mesa" value={filtros.mesa || ""} onChange={handleFiltroChange} />
                </InputContainer>
                <InputContainer>
                    <label>Fecha:</label>
                    <input type="date" name="fecha" value={filtros.fecha || ""} onChange={handleFiltroChange} />
                </InputContainer>
                <InputContainer>
                    <Boton onClick={borrarFiltros}>Borrar Filtros</Boton>
                </InputContainer>
                
            </div>
            <ContPrincipal>
                <Table>
                    <Thead>
                        <Tr1>
                            <Th>Mesa</Th>
                            <Th>Producto</Th>
                            <Th>Cantidad</Th>
                            <Th>Precio</Th>
                            <Th>Fecha</Th>
                        </Tr1>
                    </Thead>
                    <Tbody>
                        {facturas.map((factura) => (
                            <Tr2 key={factura.id_registro_fact}>
                                <TdMesa>{factura.id_mesa}</TdMesa>
                                <Td>{factura.producto}</Td>
                                <Td style={{ textAlign: "center" }}>{factura.cantidad}</Td>
                                <Td style={{ textAlign: "center" }}> $ {Number(factura.precio).toFixed(0)}</Td>
                                <Td>{moment(factura.fecha_factura).format('YYYY/MM/DD, HH:mm:ss a')}</Td>
                            </Tr2>
                            ))}
                    </Tbody>
                </Table>
            </ContPrincipal>
            <p>Total en ventas: ${totalPrecios}</p>
            <Link to="/private/todofisica/fisica">
                <Boton style={{ marginTop: "20px" }}>Regresar al menu</Boton>
            </Link>
        </Background>
    );
};

export default RegistroFactura;