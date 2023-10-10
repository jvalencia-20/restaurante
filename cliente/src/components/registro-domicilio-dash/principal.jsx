import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Background, ContPrincipal, InputContainer, Boton, Table, Tbody, Tr1, Tr2, Th, Td, Thead } from "./styled";
import { Link, useNavigate } from "react-router-dom";

const RegistroDomi2 = () => {
    const navigate = useNavigate()
    const [facturas, setFacturas] = useState([]);
    const [filtros, setFiltros] = useState({ fecha: null });
    const [totalPrecios, setTotalPrecios] = useState(0);
    const [error, setError] = useState("");

    const cargarRegistros = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/reg_domi`, {
                params: { fecha: filtros.fecha }
            });
            const total = response.data.reduce((accumulator, factura) => {
                return accumulator + parseFloat(factura.precio)
            }, 0)
            setFacturas(response.data)
            setTotalPrecios(total)
        } catch (error) {
            console.error("error al traer registros")
        }
    };
    
    useEffect(() => {
        cargarRegistros(); 
    }, [filtros]);

    const handleFiltroChange = (e) => {
        const { name, value } = e.target;
        setFiltros((prevFiltros) => ({
            ...prevFiltros,
            [name]: value
        }));
        setError("");
    };
    
    const borrarFiltros = () => {
        setFiltros((prevFiltros) => ({
            ...prevFiltros,
            fecha: null,
        }));
    };

    const handlePrintClick = () => {
        window.print();
    };
    
    const handleBackToMenuPrincipal = async () => {
        navigate('/private/todofisica/fisica');
    };

    return (
        <Background>
            <div>
                <InputContainer>
                    <label style={{color: "white"}}>Fecha:</label>
                    <input type="date" name="fecha" value={filtros.fecha || ""} onChange={handleFiltroChange} style={{marginRight:"50px"}} />
                </InputContainer>
                <InputContainer>
                    <Boton onClick={borrarFiltros}>Borrar Filtros</Boton>
                </InputContainer>
            </div>
            <ContPrincipal>
                <Table>
                    <Thead>
                        <Tbody>
                            <Tr1>
                                <Th>Nombre </Th>
                                <Th>Producto</Th>
                                <Th>Cantidad</Th>
                                <Th>Precio</Th>
                                <Th>Dirección</Th>
                                <Th>Fecha</Th>
                            </Tr1>
                        </Tbody>
                    </Thead>
                </Table>
                <Table>
                    <Tbody>
                        {facturas.map((factura) => (
                            <Tr2 key={factura.ID}>
                                <Td>{factura.nombre_cliente}</Td>
                                <Td>{factura.producto}</Td>
                                <Td style={{ textAlign: "center" }}>{factura.cantidad}</Td>
                                <Td style={{ textAlign: "center" }}> $ {Number(factura.precio).toFixed(0)}</Td>
                                <Td>{factura.direccion}</Td>
                                <Td>{moment(factura.fecha_domi).format('YYYY/MM/DD, HH:mm:ss a')}</Td>
                            </Tr2>
                        ))}
                    </Tbody>
                </Table>
                {error && <p>{error}</p>}
            </ContPrincipal>
            <p style={{ color: "black", fontSize: "20px" }}>Total en ventas: ${totalPrecios}</p>
        </Background>
    );
};

export default RegistroDomi2;