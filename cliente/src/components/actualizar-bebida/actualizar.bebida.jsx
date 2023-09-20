import { Pagina, Background, Receta, Hoja1, Hoja2, ConInfor, Infor, InforImg, Name, Entrar, Div, SpanImg, LabelImg, ContentImg, ImgPlato, Nota, DivPrincipal} from "./styles.dashboard2"
import { Sticker } from "./styles.dashboard2";
import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export const ActualizarBebida = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [nombreBebida, setNombrebebida] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState("")
    const [imgEnv, setImgEnv] = useState("")
    const [color, setColor] = useState("")
    const navigate = useNavigate()
    const { token } = useAuthContext();
    const { id } = useParams();
    const ubicacion = "http://localhost:3002/"
    const BuscarBebida = async () => {
        await Axios.get(`http://localhost:3002/api/bebida/${id}`,{
            headers: {
            Authorization: token
        } 
    })
        .then((response) => {
            setNombrebebida(response.data.nombre_bebida)
            setDescripcion(response.data.descripcion)
            setPrecio(response.data.precio)
            setSelectedImage(ubicacion+response.data.imagen)
            setColor(response.data.colores)
        })
        .catch(error =>{
        })
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            setImgEnv(file);
        }
    };

const agregarbebida = (e) => {
e.preventDefault()

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token
    }
    };
    Axios.put(`http://localhost:3002/api/updateBebida/${id}`, {
        nombre_bebida: nombreBebida,
        descripcion: descripcion,
        precio: precio,
        colores: color
    },{
        headers: {
        Authorization: token
    }  
    })
    .then(({ data }) => {
    navigate("/private/traerPlato")
    })
    .catch(error => {
        if (error.response) {
            if (error.response.status === 409) {
            const errorMessage = error.response.data;
            switch (errorMessage) {
                case 'Nombre del Plato requerido.':
            break;
            case 'descripcion requerida.':
            break;
            case 'Precio Requerido.':
            break;
            case 'Imagen Requerida':
            break;
            case 'Tipo de plato  requerido.':
            break;
            default:
            break;
        }
            } else {
            alert("Ocurrió un error en el registro.");
        }
        }  else {
            alert("Ocurrió un error en la solicitud.");
        }
        });
}

useEffect(()=>{
    BuscarBebida()
},[])
    return(
    <Pagina>
        <Background>
            <Receta>
                <DivPrincipal>
                    <Hoja1>
                        <Div>
                            <Name>Ingrese el nombre del plato:</Name>
                            <Infor
                                type="text"
                                name="nombreBebida"
                                placeholder="nombre de la bebida"
                                autoComplete="off"
                                value={nombreBebida}
                                onChange={ev => setNombrebebida(ev.target.value)}>  
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
                                style={{  height: "80px", width: "150px", borderRadius: "8px" }}>
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
                                name="color"
                                placeholder="color"
                                autoComplete="off"
                                value={color}
                                onChange={ev => setColor(ev.target.value)}>  
                            </Infor>
                        </Div>   
                    </Hoja1>
                    <Hoja2>
                        <ConInfor style={{height:"480px"}}>
                            <div style={{ height:"100px", width:"100%", display:"flex", justifyContent: "center"}}>
                            </div>
                                <p style={{margin: "none", fontSize:"20px"}}>Imagen Actual</p>
                                <ContentImg> 
                                    {selectedImage && <ImgPlato src={selectedImage} alt="Seleccionada" />}
                                </ContentImg>
                                <Link to={`/private/actualizarImgbebida/${id}`} ><button>Cambiar Imagen</button></Link>
                            <div style={{display: "flex"}}>
                                <Entrar onClick={agregarbebida}></Entrar>
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