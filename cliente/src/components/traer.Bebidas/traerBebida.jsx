import { Pagina, Editar, Background, Receta, DivPrincipal, Contendiv, Borrar, ContentImg, ImgPlato, DivFilas } from "./styles.dashboard2"
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import "../../App.css"
import { useAuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";


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
                        <h1 style={{ color: "black", fontSize:"40px"}}>Bebidas</h1>
                        <div onClick={enviar} style={{display:"flex", alignItems:"center", justifyContent:"center", marginLeft:"4em",cursor:"pointer"}}>
                            <button style={{height:"3em", backgroundColor:"var(--color-azul)", color:"white", border:"none",cursor:"pointer", borderRadius:"5px", width:"150px", fontSize:"18px"}}>Agregar Bebida</button>
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-evenly", margin:"0", color:"#ffff", backgroundColor:"var(--color-negro)", width:"80%"}}>
                                <h2>Nombre Bedida</h2>
                                <h2>Imagen</h2>
                                <h2 style={{width:"400px"}}>Acciones</h2>
                    </div>
                    <DivPrincipal >
                        <div style={{ position: "relative", top: "9%" }}>
                            {bebida.map((val, index) => (
                                    <Contendiv key={index}>
                                        <DivFilas>
                                            <div style={{ width: "100px",fontSize:"20px" }} >{val.nombre_bebida}</div>
                                            <ContentImg>
                                                <ImgPlato src={`${process.env.REACT_APP_PRIMERO_UNO}/` + val.imagen} alt={val.nombre_bebida}></ImgPlato>
                                            </ContentImg>
                                            <div style={{display:"flex", justifyContent:"space-evenly", width:"300px"}}>
                                            <Link to={`/private/actualizarBebida/${val.id_bebida}`}>
                                                <Editar>Editar</Editar>
                                            </Link>
                                            <Borrar onClick={() => eliminarProducto(val.id_bebida)}>Eliminar</Borrar>
                                            </div>
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