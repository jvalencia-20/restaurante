import React from "react";
import { useState, useEffect } from 'react';
import Axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Contenedor, Main, Tabla, Thead,Editar, Tr, Th, Tbody, Td, Borrar } from "./styles";
import dedo from "../Img/aqui1.jpg"
import dedo2 from "../Img/aqui2.jpg"

export const ListarAdmin = () => {
    const Navegate = useNavigate()
    const {token} = useAuthContext()
    const [cliente, setCliente] = useState([])
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
        Axios.delete(`${process.env.REACT_APP_PRIMERO_UNO}/api/deleteadmin/${id_admin}`,{
            headers: {
            Authorization: token
        }  
        })
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
    const enviar = () => {
        Navegate("/private/register")
        }
    return(
        <Contenedor>
            <Main>
                <div>
                    <h1 style={{color:"black",justifyContent:"center",margin:"0"}}>Listado de usuarios</h1>
                    <div onClick={enviar} style={{display:"flex", alignItems:"center", justifyContent:"center",cursor:"pointer"}}>
                        <img src={dedo} style={{height:"3em", borderRadius:"1em 0 0 1em"}}/>
                        <button style={{height:"2.7em", backgroundColor:"rgb(51,51,51)", color:"white", border:"none",cursor:"pointer",width:"100%",fontSize:"18px"}}>Crear Usuario</button>
                        <img src={dedo2} style={{height:"3em", borderRadius:" 0 1em 1em 0 "}}/>
                    </div>
                </div>
                <Tabla>
                    <Thead>
                        <Tr>
                            <Th>NOMBRE USUARIO</Th>
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
                                        <Editar>
                                            Editar
                                        </Editar>
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