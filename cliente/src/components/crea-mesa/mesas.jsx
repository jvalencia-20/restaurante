import { Pagina, Background, Receta, Hoja1, Hoja2, ConInfor, Infor, InforImg, Name, Entrar, Div, SpanImg, LabelImg, ContentImg, ImgPlato, Nota, DivPrincipal} from "./style"
import { Sticker } from "./style";
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const CreaMesas = () => {
    const navigate = useNavigate()
    const {token} = useAuthContext()
    const [mesas, setMesas] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [numeroMesa, setNumeroMesa] = useState("")
    const [imagen_url, setImagen_url] = useState("")
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            setImagen_url(file);
        }
    };      

const agregarplato = (e) => {
e.preventDefault()

const datos = new FormData();

datos.append("numeroMesa", numeroMesa)
datos.append("imagen", imagen_url)


const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token
    }
    };
    Axios.post("http://localhost:3002/api/creare", datos, config)
    .then(({ data }) => {
    window.location.reload()
    })
    .catch((error) => {
    });
}
const getMesas = () => {
    Axios.get("http://localhost:3002/api/mesas").then((response) => {
    setMesas(response.data.length);
    });
};

useEffect(() => {
    getMesas();
}, []);
    return(
    <Pagina>
        <Background>
            <Receta>
            <h1>Creacion de Mesas</h1>
                <DivPrincipal>
                    <Hoja1>
                        <Div style={{ height:" 3em"}}>
                            <Name>Numero total de mesas: {mesas}</Name>
                            <Div style={{width:"17em"}}></Div>
                        </Div>
                        <Div>
                            <Name>Ingrese el numero de la mesa siguiente:</Name>
                            <Infor
                                type="text"
                                name="numeroMesa"
                                placeholder="numero de la mesa"
                                autoComplete="off"
                                value={numeroMesa}
                                onChange={ev => setNumeroMesa(ev.target.value)}>
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
                                <Entrar onClick={agregarplato}></Entrar>
                                <Sticker></Sticker>
                            </div>
                        </ConInfor>
                    </Hoja2>
                </DivPrincipal>
            </Receta>
        </Background>
    </Pagina>
    )
}