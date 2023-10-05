import { Pagina, Hoja1, Hoja2, ConInfor, Infor, InforImg, Name, Entrar, Div, SpanImg, LabelImg, ContentImg, ImgPlato, Nota, DivPrincipal} from "./style";
import { Sticker } from "./style";
import React, { useState } from 'react';
import Axios from "axios";
import elimina from "../../Img/delete.png"
import { useAuthContext } from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export const CreaInformacion = () => {
    const navigate = useNavigate()
    const {token} = useAuthContext()
    const [titulo, setTitulo] = useState("");
    const [informacion, setInformacion] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagen_url, setImagen_url] = useState("")
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            setImagen_url(file);
        }
    };      

const agregarInformacion = (e) => {
    navigate("/private/crearInfor")
e.preventDefault()

const datos = new FormData();

datos.append("titulo", titulo)
datos.append("informacion", informacion)
datos.append("imagen", imagen_url)


const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token
    }
    };
    Axios.post(`${process.env.REACT_APP_PRIMERO_UNO}/api/crearInformacion`, datos, config)
    .then(({ data }) => {
    window.location.reload()
    })
    .catch((error) => {
    });
}


    return(
    <Pagina>
            <h1 style={{color:"#000"}}>Creacion de Informes</h1>
                <DivPrincipal>
                    <Hoja1>
                        <Div style={{ height:" 3em"}}>
                            <Name>Informacion para los clientes</Name>
                            <Div style={{width:"17em"}}></Div>
                        </Div>
                        <Div>
                            <Name>Titulo:</Name>
                            <Infor
                                type="text"
                                name="titulo"
                                placeholder="titulo"
                                autoComplete="off"
                                value={titulo}
                                onChange={ev => setTitulo(ev.target.value)}>
                            </Infor>
                        </Div>
                        <Div>
                            <Name>Informacion:</Name>
                            <Infor
                                type="text"
                                name="informacion"
                                placeholder="informacion"
                                autoComplete="off"
                                value={informacion}
                                onChange={ev => setInformacion(ev.target.value)}
                                style={{  height: "80px", borderRadius: "8px" }}
                                >
                            </Infor>
                        </Div>
                    </Hoja1>
                    <Hoja2>
                        <ConInfor style={{height:"480px"}}>
                            <div style={{ height:"100px", width:"100%", display:"flex", justifyContent: "center"}}>
                                <LabelImg className="btn btn-warning">
                                <SpanImg> </SpanImg>
                                <InforImg
                                    hidden 
                                    type="file"
                                    onChange={handleImageChange}>
                                </InforImg>
                                </LabelImg>
                                <Nota></Nota>
                            </div>
                                <ContentImg>
                                    {selectedImage && <ImgPlato src={selectedImage} alt="Seleccionada" />}
                                </ContentImg>
                            <div style={{display: "flex"}}>
                            <Entrar onClick={agregarInformacion}>Guardar</Entrar>
                            <Sticker></Sticker>
                            </div>
                        </ConInfor>
                    </Hoja2>
                </DivPrincipal>
    </Pagina>
    )
}