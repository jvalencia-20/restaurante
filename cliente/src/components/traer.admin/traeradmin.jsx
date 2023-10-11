import React from "react";
import { useState, useEffect } from 'react';
import Axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Contenedor, Main, Tabla, Thead,Editar, Tr, Th, Tbody, Td, Borrar,Titulo } from "./styles";
import {FaUserCog} from "react-icons/fa"
import {FiUserPlus} from "react-icons/fi"
import Swal from "sweetalert2"

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
    const eliminarAdmin = (id_admin,nombre) => {
        Swal.fire({
            title:'Confirmar Eliminacion?',
            html:`<i>Realmente quieres eliminar a <b>${nombre}</b></i>`,
            icon:'warning',
            iconColor:'#b80909',
            showCancelButton:'true',
            confirmButtonColor:'#0478e4',
            cancelButtonColor:'#f90707',
            confirmButtonText:'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.delete(`${process.env.REACT_APP_PRIMERO_UNO}/api/deleteadmin/${id_admin}`,{
                    headers: {
                        Authorization: token
                    }
                }).then(() => {
                    clientes();
                    Swal.fire({
                        icon:'success',
                        title:'Eliminado',
                        html:`Se ha eliminado a <b>${nombre}</b>`,
                        showConfirmButton:false,
                        timer:2000
                    });
                })
                .catch(function (error) {
                    Swal.fire({
                        icon:'error',
                        title:'opps',
                        text:'No se pudo eliminar'
                    });
                });
            }
        })
            // .then((response) => {
            // clientes()
            // window.location.reload()
            // ;
            // })
        //     .catch(error => {
        //     console.error("Error al eliminar el producto:", error);
        // });
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
                <div style={{display:"flex", alignItems:"center", height:"100px"}}>
                    <Titulo style={{color:"black",justifyContent:"center",margin:"0",fontFamily:""}}>Listado de usuario</Titulo>
                    <div onClick={enviar} style={{display:"flex", alignItems:"center", justifyContent:"center", marginLeft:"4em",cursor:"pointer"}}>
                        <button style={{height:"3em", backgroundColor:"var(--color-azul)", color:"white", border:"none",cursor:"pointer", borderRadius:"5px", width:"150px", fontSize:"18px"}}><FiUserPlus/> Crear Usuario</button>
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
                                
                            <Tr  key={index} style={{ backgroundColor: index % 2 === 0 ? 'white' : '' }} >
                                <Td>{val.nombre}</Td>
                                <Td>{val.correo}</Td>
                                <Td>{val.cargo}</Td>
                                <Td>
                                    <Link to={`/private/actualizaradmin/${val.id_admin}`}>
                                        <Editar>
                                            <FaUserCog/> Editar
                                        </Editar>
                                    </Link>
                                    <Borrar onClick={() => eliminarAdmin(val.id_admin, val.nombre)}>
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