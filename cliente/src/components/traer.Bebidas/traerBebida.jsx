import { Pagina, Background, Receta,  DivPrincipal, Contendiv, Borrar, ContentImg, ImgPlato, DivFilas} from "./styles.dashboard2"

import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useAuthContext } from "../context/AuthContext";
// import { LOGOUT } from "../router/path";
// import {  Link } from "react-router-dom";

export const TraerBebidas = () => {

    const [bebida, setBebida] = useState([])
    const {token} = useAuthContext()

    console.log(bebida,"este es plato")
    //mapeo de platos desde la db
    const Bebidas = () => {
        Axios.get("http://localhost:3002/api/bebidas", {
            headers: {
                Authorization: token
            } 
        }).then((response) => {
            setBebida(response.data)
            // console.log(response.data)
        })
        .catch(error => {
        // alert("hola: " + error.message);
        });
    }
    useEffect(() => {
        Bebidas()
    },)

    const eliminarProducto = (id_bebida) => {
        Axios.delete(`http://localhost:3002/api/eliminarbebida/${id_bebida}`)
            .then((response) => {
            console.log("Respuesta del servidor:", response.data);
            Bebidas()
            ;
            })
            .catch(error => {
            console.error("Error al eliminar el producto:", error);
        });
    }    





    return(
    <Pagina>
        <Background>
            <Receta>
                <DivPrincipal >
                <div style={{position: "relative", top:"9%"}}>
                
                    {
                    bebida.map((val, index)=>(    
                        <Contendiv key={index}>
                            
                            <DivFilas>
                                
                            <div style={{width: "100px"}} >{val.nombre_bebida}</div>
                            <ContentImg>
                                <ImgPlato src={"http://localhost:3002/" + val.imagen} alt={val.nombre_bebida}></ImgPlato>
                            </ContentImg>

                            
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