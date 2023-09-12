import React from "react";
import { useState, useEffect } from 'react';
import Axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { Contenedor, Main, Tabla, Thead, Tr, Th, Tbody, Td } from "./styles";



export const ListarClientes = () => {

    const {token} = useAuthContext()
    const [cliente, setCliente] = useState([])

    const clientes = () => {
        Axios.get("http://localhost:3002/api/cliente")
        .then((response) => {
            setCliente(response.data)
        })
        .catch(error =>{

        })
    }

    useEffect(() => {
        clientes()
    },)

    

    return(
        <Contenedor>
            <Main>
                <h2>Listado de Admin</h2>

                <Tabla style={{borderCollapse: "collapse", borderBottom:"2px solid black", borderRight:"2px solid black", borderLeft:"2px solid black" }}>
                    <Thead style={{backgroundColor:"black", color:"white", height:"40px"}} >
                        <Tr>
                            
                                <Th>NOMBRE_USUARIO</Th>
                                <Th>CORREO</Th>
                                <Th>ACCION</Th>
                            
                        </Tr>
                    </Thead>
                    <Tbody style={{backgroundColor:"white"}}>
                        {
                            cliente.map((val, index)=>(
                                
                            <Tr  key={index} style={{ backgroundColor: index % 2 === 0 ? 'grey' : 'white' }} >
                                <Td>{val.nombre}</Td>
                                <Td>{val.correo}</Td>
                                <Td><button>Editar</button><button>Borrar</button></Td>
                            </Tr>  

                            ))
                        }
                        {/* <tr  >
                                <td>Ariel Camargo</td>
                                <td>arielcp0610@hotmail.com</td>
                                <td><button>Editar</button><button>Borrar</button></td>
                            </tr>   */}

                    </Tbody>
                </Tabla>
            </Main>
        </Contenedor>
    )
};