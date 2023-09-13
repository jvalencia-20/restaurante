import { Pagina, Background, Receta,  DivPrincipal, Contendiv, Borrar, ContentImg, ImgPlato, DivFilas} from "./styles.dashboard2"

import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useAuthContext } from "../context/AuthContext";


export const TraerPlatos = () => {
    const [plato, setPlato] = useState([])
    const {token} = useAuthContext()
    const Platos = () => {
        Axios.get("http://localhost:3002/api/allPlatos", {
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
        Axios.delete(`http://localhost:3002/api/elimina/${id_plato}`)
            .then((response) => {
            Platos()
            ;
            })
            .catch(error => {
        });
    }    

    return(
    <Pagina>
        <Background>
            <Receta>
                <DivPrincipal >
                    <div style={{position: "relative", top:"9%"}}>
                        {
                        plato.map((val, index)=>(    
                            <Contendiv key={index}>
                                <DivFilas>
                                    <div style={{width: "100px"}} >{val.nombre_plato}</div>
                                    <ContentImg>
                                        <ImgPlato src={"http://localhost:3002/" + val.imagen} alt={val.nombre_plato}></ImgPlato>
                                    </ContentImg>
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