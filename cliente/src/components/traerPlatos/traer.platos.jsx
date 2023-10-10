import { Pagina, Background, Receta, Editar, DivPrincipal, Contendiv, Borrar, ContentImg, ImgPlato, DivFilas } from "./styles.dashboard2"
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import "../../App.css"
import { useAuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";


export const TraerPlatos = () => {
    const Navegate = useNavigate()
    const [plato, setPlato] = useState([])
    const { token } = useAuthContext()
    const Platos = () => {
        Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/platos`, {
            headers: {
                Authorization: token
            }
        }).then((response) => {
            setPlato(response.data)
        })
            .catch(error => {
            });
    }
    useEffect(() => {
        Platos()
    },)
    const eliminarProducto = (id_plato) => {
        Axios.delete(`${process.env.REACT_APP_PRIMERO_UNO}/api/elimina/${id_plato}`,{
            headers: {
            Authorization: token
        }  
        })
            .then((response) => {
                Platos()
                    ;
            })
            .catch(error => {
                console.error("Error al eliminar el producto:", error);
            });
    }
    const enviar = () => {
        Navegate("/private/dashboard")
    }

    return (
        <Pagina>
            <Background>
                <Receta>
                    <div style={{display:"flex"}}>
                        <h1 style={{ color: "black", fontSize:"40px"}}>Platos</h1>
                        <div onClick={enviar} style={{display:"flex", alignItems:"center", justifyContent:"center", marginLeft:"4em",cursor:"pointer"}}>
                            <button style={{height:"3em", backgroundColor:"var(--color-azul)", color:"white", border:"none",cursor:"pointer", borderRadius:"5px", width:"150px", fontSize:"18px"}}>Agregar Plato</button> 
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-evenly", margin:"0", color:"#ffff", backgroundColor:"var(--color-negro)", width:"80%"}}>
                                <h2>Nombre Plato</h2>
                                <h2>Imagen</h2>
                                <h2 style={{width:"400px"}}>Acciones</h2>
                    </div>
                    <DivPrincipal >
                        <div style={{ position: "relative", top: "9%" }}>
                            {plato.map((val, index) => (
                                <Contendiv key={index}>
                                    <DivFilas>
                                        <div style={{ width: "100px", fontSize:"20px" }} >{val.nombre_plato}</div>
                                        <ContentImg>
                                            <ImgPlato src={`${process.env.REACT_APP_PRIMERO_UNO}/` + val.imagen} alt={val.nombre_plato}></ImgPlato>
                                        </ContentImg>
                                        <div style={{display:"flex", justifyContent:"space-evenly", width:"300px"}}>
                                        <Link to={`/private/actualizarPlato/${val.id_plato}`}>
                                            <Editar>Editar</Editar>
                                        </Link>
                                        <Borrar onClick={() => eliminarProducto(val.id_plato)}>Eliminar</Borrar>                                                
                                        </div>
                                    </DivFilas>
                                </Contendiv>
                            ))}
                        </div>
                    </DivPrincipal>
                </Receta>
            </Background>
        </Pagina>
    )
}