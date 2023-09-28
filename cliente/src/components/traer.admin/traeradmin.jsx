import React from "react";
import { useState, useEffect } from 'react';
import Axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Contenedor, Main, Tabla, Thead, Tr, Th, Tbody, Td, Borrar } from "./styles";
import "./styles.css"

export const ListarAdmin = () => {
    const {token} = useAuthContext()
    const [cliente, setCliente] = useState([])
    const navigate = useNavigate()
    const clientes = () => {
        Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/admin`,{
            headers: {
            Authorization: token
        } 
    })
        .then((response) => {
            setCliente(response.data)
        })
        .catch(error =>{
        })
    }
    const eliminarAdmin = (id_admin) => {
        Axios.delete(`${process.env.REACT_APP_PRIMERO_UNO}/api/deleteadmin/${id_admin}`)
            .then((response) => {
            clientes()
            window.location.reload()
            ;
            })
            .catch(error => {
            console.error("Error al eliminar el producto:", error);
        });
    }    
    useEffect(() => {
        clientes()
    },[])

    return(
        <Contenedor>
            <Main>
                <h2>Listado de Admin</h2>
                <Tabla >
                    <Thead  >
                        <Tr>
                            <Th>NOMBRE_USUARIO</Th>
                            <Th>CORREO</Th>
                            <Th>CARGO</Th>
                            <Th>ACCION</Th>
                        </Tr>
                    </Thead>
                    <Tbody style={{backgroundColor:"white"}}>
                        {
                            cliente.map((val, index)=>(
                                
                            <Tr  key={index} style={{ backgroundColor: index % 2 === 0 ? 'white' : '#c7ba453c' }} >
                                <Td>{val.nombre}</Td>
                                <Td>{val.correo}</Td>
                                <Td>{val.cargo}</Td>
                                <Td>
                                    <Link to={`/private/actualizaradmin/${val.id_admin}`}>
                                        <button >
                                            Editar
                                        </button>
                                    </Link>
                                    <Borrar onClick={() => eliminarAdmin(val.id_admin)}>
                                        Borrar
                                    </Borrar>
                                </Td>
                            </Tr>  
                            ))
                        }
                    </Tbody>
                </Tabla>
            </Main>
        </Contenedor>
    )
};