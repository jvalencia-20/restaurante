import React, { useEffect, useState } from "react";
import Axios from "axios"
import { useNavigate,Link } from "react-router-dom";
import { Domicilio, Fondo, Pedido, Pendiente, Select, Titulo, Regresar, Notificacion } from "./styled";

const SelectFactura = () => {
    const navigate = useNavigate()
    const [factura, setFactura] = useState([])
    const [notificacion, setNotificacion] = useState(0)
    const Domicilios = () => {
    Axios.get("http://localhost:3002/api/domicilios").then((response) => {
        setFactura(response.data)
        setNotificacion(response.data.length)
    })
    .catch(error => {
    })
    }
    useEffect(()=>{
    Domicilios()
    },[])
    const enviar = (direccion) => {
    const parametro = direccion;
    const parametroCodificado = encodeURIComponent(parametro); //Cuando creas una URL, ciertos caracteres, como espacios, signos de puntuación y otros caracteres especiales, deben codificarse para que sean interpretados correctamente por los servidores web y los navegadores. encodeURIComponent realiza esta codificación al reemplazar caracteres no seguros en la URL con su equivalente codificado en URL
    navigate(`/private/todofisica/facturadomicilio/${parametroCodificado}`)
    }

return (
<>
    <Fondo>
        <Select>
            <Titulo>
                <div style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Domicilio>Domicilios Pendientes</Domicilio>
                <Notificacion style={{fontSize:"22px", filter:"drop-shadow(-1px 10px 5px black)"}}>{notificacion}</Notificacion>
                </div>
                <Link to="/private/todofisica/fisica">
                    <Regresar>regresar al menu</Regresar>
                </Link>
            </Titulo>
            <Pedido>
            {factura.length > 0 ? (
                factura.map((domi, index) => {
                return (
                <Pendiente onClick={()=> enviar(domi.direccion)} key={index}>
                    <h2 style={{margin:"0"}}>Nombre: {domi.nombre_cliente}.</h2>
                    <h2 style={{margin:"0"}}>Hora Entrega: {domi.hora_entrega}.</h2>
                    <h2 style={{margin:"0"}}>Direccion: {domi.direccion}.</h2>
                </Pendiente>
                )})               
            ): <Pendiente>
                <h2 style={{margin:"0"}}>No tenemos Domicilios Pendientes</h2>
                <h2 style={{margin:"0"}}>Cargue de nuevo la pagina...</h2>
            </Pendiente>}
            </Pedido>
        </Select>
    </Fondo>
</>
)
}

export default SelectFactura