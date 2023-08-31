import { Pagina, Background, Receta, Hoja1, Hoja2, ConInfor, Infor, InforImg, Name, Entrar, Div, SpanImg, LabelImg, ContentImg, ImgPlato, Nota } from "./stylesDashboard"
import { Sticker, Sticker2 } from "./stylesDashboard";
import React, { useState } from 'react';
import Axios from "axios";
import { LOGOUT } from "../router/path";
import {  Link } from "react-router-dom";

export const Dashboard = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [nombrePlato, setNombrePlato] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState("")
    const [imgEnv, setImgEnv] = useState("")
    const [tipoPlato, setTipoPlato] = useState("")
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            setImgEnv(file);
        }
    };
        console.log(nombrePlato);
        console.log(descripcion)
        console.log(precio)
        console.log(selectedImage) 
        console.log(tipoPlato)

const agregarplato = (e) => {
e.preventDefault()

const datos = new FormData();

datos.append("nombre_plato", nombrePlato)
datos.append("descripcion", descripcion)
datos.append("precio", precio)
datos.append("imagen", imgEnv)
datos.append("tipo_plato", tipoPlato)

console.log("Datos enviados:", datos);

console.log("Valor del campo 'nombre_plato':", datos.get('nombre_plato'));
console.log("Valor del campo 'descripcion':", datos.get('descripcion'));
console.log("Valor del campo 'precio':", datos.get('precio'));
console.log("Valor del campo 'imagen':", datos.get('imagen'));
console.log("Valor del campo 'tipo_plato':", datos.get('tipo_plato'));

const config = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
    };
    Axios.post("http://localhost:3002/api/crearplato", datos, config)
    .then(({ data }) => {
    console.log(data, "estoy aqui");
    })
    .catch((error) => {
        console.log(error);
    });
}
    return(
    <Pagina>
        <Background>
            <Receta>
                <Hoja1>
                    <h1 style={{margin:"0%"}}>Crea una receta nueva.</h1>
                    <Sticker2></Sticker2>
                    <ConInfor>
                        <Div>
                            <Name>Ingrese el nombre del plato:</Name>
                            <Infor
                                type="text"
                                name="nombrePlato"
                                placeholder="nombre del plato"
                                autoComplete="off"
                                value={nombrePlato}
                                onChange={ev => setNombrePlato(ev.target.value)}>  
                            </Infor>
                        </Div>
                        <Div style={{ alignItems:"start"}}>
                            <Name >Ingrese la Descripción:</Name>
                            <Infor 
                                type="text"
                                name="descripcion"
                                placeholder="Descripción"
                                autoComplete="off"
                                rows="10" 
                                cols="40"
                                value={descripcion}
                                onChange={ev => setDescripcion(ev.target.value)}
                                style={{ border: "1px solid black", height: "80px", width: "150px", borderRadius: "2%" }}>
                            </Infor>
                        </Div>
                        <Div>
                            <Name>Ingrese el precio:</Name>
                            <Infor
                                type="text"
                                name="precio"
                                placeholder="Precio"
                                autoComplete="off"
                                value={precio}
                                onChange={ev => setPrecio(ev.target.value)}>
                                </Infor>
                        </Div>   
                        <Div>
                            <Name>Ingrese el tipo de plato:</Name>
                            <Infor
                                type="text"
                                name="tipoPlato"
                                placeholder="tipo del plato"
                                autoComplete="off"
                                value={tipoPlato}
                                onChange={ev => setTipoPlato(ev.target.value)}>  
                            </Infor>
                        </Div>                
                    </ConInfor>
                </Hoja1>
                <Hoja2>
                    <ConInfor style={{height:"480px"}}>
                        <div style={{ height:"100px", width:"100%", display: "flex"}}>
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
                        <Entrar onClick={agregarplato}></Entrar>
                        <button><Link to={LOGOUT}>Cerrar sesión</Link></button>
                        <Sticker></Sticker>
                        </div>
                    </ConInfor>
                </Hoja2>
            </Receta>
        </Background>
    </Pagina>
    )
}