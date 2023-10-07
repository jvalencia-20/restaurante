import { Pagina, Editar, Background, Receta, DivPrincipal, Contendiv, Borrar, ContentImg, ImgPlato, DivFilas } from "./styles.dashboard2"
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import dedo from "../Img/aqui1.jpg"
import dedo2 from "../Img/aqui2.jpg"

export const TraerBebidas = () => {
    const Navegate = useNavigate()
    const [bebida, setBebida] = useState([])
    const { token } = useAuthContext()
    const Bebidas = () => {
        Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/bebidas`, {
            headers: {
                Authorization: token
            }
        }).then((response) => {
            setBebida(response.data)
        })
            .catch(error => {
            });
    }
    useEffect(() => {
        Bebidas()
    },)
    const eliminarProducto = (id_bebida) => {
        Axios.delete(`${process.env.REACT_APP_PRIMERO_UNO}/api/eliminarbebida/${id_bebida}`,{
            headers: {
            Authorization: token
        }  
        })
            .then((response) => {
                Bebidas()
                    ;
            })
            .catch(error => {
            });
    }
    const enviar = () => {
        Navegate("/private/crearBebida")
    }
    return (
        <Pagina>
            <Background>
                <Receta>
                    <div style={{display:"flex"}}>
                        <h1 style={{ color: "black"}}>Bebidas</h1>
                        <div onClick={enviar} style={{display:"flex", alignItems:"center", justifyContent:"center", marginLeft:"4em",cursor:"pointer"}}>
                            <img src={dedo} style={{height:"4em", borderRadius:"1em 0 0 1em"}}/>
                            <button style={{height:"4.8em", backgroundColor:"rgb(51,51,51)", color:"white", border:"none",cursor:"pointer"}}>Agregar Plato</button>
                            <img src={dedo2} style={{height:"4em", borderRadius:" 0 1em 1em 0 "}}/>
                        </div>
                    </div>
                    <DivPrincipal >
                        <div style={{ position: "relative", top: "9%" }}>
                            <div style={{display:"flex", justifyContent:"space-evenly", margin:"0", color:"#ffff"}}>
                                <h1>Nombre Bebida</h1>
                                <h1>Imagen</h1>
                                <h1>Editar</h1>
                                <h1>Borrar</h1>
                            </div>
                            {bebida.map((val, index) => (
                                    <Contendiv key={index}>
                                        <DivFilas>
                                            <div style={{ width: "100px",fontSize:"20px" }} >{val.nombre_bebida}</div>
                                            <ContentImg>
                                                <ImgPlato src={`${process.env.REACT_APP_PRIMERO_UNO}/` + val.imagen} alt={val.nombre_bebida}></ImgPlato>
                                            </ContentImg>
                                            <Link to={`/private/actualizarBebida/${val.id_bebida}`}>
                                                <Editar>editar</Editar>
                                            </Link>
                                            <Borrar onClick={() => eliminarProducto(val.id_bebida)} />
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