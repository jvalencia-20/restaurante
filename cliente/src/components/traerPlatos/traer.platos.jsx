import { Pagina, Background, Receta, Editar, DivPrincipal, Contendiv, Borrar, ContentImg, ImgPlato, DivFilas } from "./styles.dashboard2"
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import dedo from "../Img/aqui1.jpg"
import dedo2 from "../Img/aqui2.jpg"

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
                        <h1 style={{ color: "black"}}>Platos</h1>
                        <div onClick={enviar} style={{display:"flex", alignItems:"center", justifyContent:"center", marginLeft:"4em",cursor:"pointer"}}>
                            <img src={dedo} style={{height:"4em", borderRadius:"1em 0 0 1em"}}/>
                            <button style={{height:"4.8em", backgroundColor:"rgb(51,51,51)", color:"white", border:"none",cursor:"pointer"}}>Agregar Plato</button>
                            <img src={dedo2} style={{height:"4em", borderRadius:" 0 1em 1em 0 "}}/>
                        </div>
                    </div>
                    <DivPrincipal >
                        <div style={{ position: "relative", top: "9%" }}>
                            <div style={{display:"flex", justifyContent:"space-evenly", margin:"0", color:"#ffff"}}>
                                <h1>Nombre Plato</h1>
                                <h1>Imagen</h1>
                                <h1>Editar</h1>
                                <h1>Borrar</h1>
                            </div>
                            {plato.map((val, index) => (
                                    <Contendiv key={index}>
                                        <DivFilas>
                                            <div style={{ width: "100px", fontSize:"20px" }} >{val.nombre_plato}</div>
                                            <ContentImg>
                                                <ImgPlato src={`${process.env.REACT_APP_PRIMERO_UNO}/` + val.imagen} alt={val.nombre_plato}></ImgPlato>
                                            </ContentImg>
                                            <Link to={`/private/actualizarPlato/${val.id_plato}`}>
                                                <Editar>Editar</Editar>
                                            </Link>
                                            <Borrar onClick={() => eliminarProducto(val.id_plato)}/>
                                        </DivFilas>
                                    </Contendiv>
                                ))
                            }
                        </div>
                    </DivPrincipal>
                </Receta>
            </Background>
        </Pagina>
    )
}