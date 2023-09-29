import { Pagina, Background, Receta,  DivPrincipal, Contendiv, Borrar, ContentImg, ImgPlato, DivFilas} from "./styles.dashboard2"
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export const TraerBebidas = () => {
    const [bebida, setBebida] = useState([])
    const {token} = useAuthContext()
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
        Axios.delete(`${process.env.REACT_APP_PRIMERO_UNO}/api/eliminarbebida/${id_bebida}`)
            .then((response) => {
            Bebidas()
            ;
            })
            .catch(error => {
        });
    }    

    return(
    <Pagina>
        <Background>
            <Receta>
            <h1 style={{color:"white"}}>Bebidas</h1>
                <DivPrincipal >
                    <div style={{position: "relative", top:"9%"}}>
                        {
                        bebida.map((val, index)=>(    
                            <Contendiv key={index}>
                                <DivFilas>
                                    <div style={{width: "100px"}} >{val.nombre_bebida}</div>
                                    <ContentImg>
                                        <ImgPlato src={`${process.env.REACT_APP_PRIMERO_UNO}/` + val.imagen} alt={val.nombre_bebida}></ImgPlato>
                                    </ContentImg>
                                    <Link to={`/private/actualizarBebida/${val.id_bebida}`}>
                                        <button >editar</button>
                                    </Link>
                                    <Borrar onClick={() => eliminarProducto(val.id_bebida)}/>
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