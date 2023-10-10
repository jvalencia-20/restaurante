import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";
import {Body, Container, Header, ContainerHeader, Boton, CajaNav, CajaLogo, ContainerMain, ContainerMenu } from "./styles-princDashboard"
import { LOGOUT } from "../router/path";
import Axios from "axios"
import "../../App.css"
import { useAuthContext } from "../context/AuthContext"
import Paila from "../VentanasModal/paila";
import Comprobando from "../VentanasModal/comprobando";
import {FaUsers} from "react-icons/fa"
import {MdOutlineTableRestaurant} from "react-icons/md"
import {GiHotMeal} from "react-icons/gi"
import {GiDrinkMe} from "react-icons/gi"
import {FaClipboardList} from "react-icons/fa"
import {MdFormatListBulletedAdd} from "react-icons/md"
import {PiListMagnifyingGlassFill} from "react-icons/pi"

function PrincipalDashboard() {
    const navegate = useNavigate()
    const [producto, setProducto] = useState([]);
    const ubicacion = useLocation()
    const [user, setUser] = useState("")
    const [activo, setActivo] = useState(false)
    const [destokenado, setDestokenado] = useState("")
    const { token, logout } = useAuthContext();
    const [comprobar, setComprobar] = useState(true) 
    const decodeJWT= (token) => {
        try{
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        const decode = JSON.parse(jsonPayload);
        setDestokenado(decode.id)
    }
    catch{
        logout() 
    }
    }
    const cliente = async () => {
    await Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/admin/${destokenado}`,{
        headers: {
        Authorization: token
    } 
})
    .then((response) => {
        setUser(response.data.nombre)
        if (response.data.cargo === "empleado" ) {
            navegate("/private/todofisica/fisica")
        }
        setComprobar(false)
    })
    .catch(error =>{
        if(error){
            logout()
            
        }
    })
}

useEffect(() => {
    decodeJWT(token)
}, [])
setTimeout(() => {
    cliente()
    }, 100);

return (
<>
    {activo && <Paila />}
    {comprobar && <Comprobando />}
    <Body>
        <Container>
            <ContainerHeader>    
                <Header>
                    <CajaLogo >
                        <h1>Bienvenido {user} </h1>
                    </CajaLogo>
                    <div style={{fontSize:"20px"}}><Link to={LOGOUT}><Boton style={{height:"80px",width:"200px", color:"var(--color-blanco)",fontSize:"20px"}}>Cerrar sesión</Boton></Link></div>
                </Header>
            </ContainerHeader>
            <CajaNav>
                <Link to="/private/traerAdmin" style={{cursor:"inherit",marginBottom:"15px", width:"100%"}}><Boton><FaUsers/> Administradores</Boton></Link>
                <Link to="/private/creaMesas" style={{cursor:"inherit",marginBottom:"15px"}}><Boton><MdOutlineTableRestaurant/> Crear Mesa</Boton></Link>
                <Link to="/private/traerPlato" style={{cursor:"inherit",marginBottom:"15px"}}><Boton><GiHotMeal/> Platos</Boton></Link>
                <Link to="/private/traerBebida" style={{cursor:"inherit",marginBottom:"15px"}}><Boton><GiDrinkMe/> Bebidas</Boton></Link>
                <Link to="/private/informate" style={{cursor:"inherit",marginBottom:"15px"}}><Boton><FaClipboardList/> Informacion</Boton></Link>
                <Link to="/private/inventario" style={{cursor:"inherit",marginBottom:"15px"}}><Boton><MdFormatListBulletedAdd/> Inventario</Boton></Link>
                <Link to="/private/registrosdomi2" style={{cursor:"inherit",marginBottom:"15px"}}><Boton><PiListMagnifyingGlassFill/> Registro domicilio</Boton></Link>
                <Link to="/private/registro-fact2" style={{cursor:"inherit",marginBottom:"15px" }}><Boton><PiListMagnifyingGlassFill/> Registro fisico</Boton></Link>
            </CajaNav>      
            <ContainerMain >
                <Outlet />
            </ContainerMain >
            <ContainerMenu><h1>Productos</h1>
                {
                    producto.map((val, index)=>(    
                        <div key={index}>
                            <div style={{width:"300px",display:"flex", alignItems: "center", justifyContent:"center", height:"100%"}}>
                                <h5 >{val.nombre_producto}</h5>
                            </div>
                        </div>
                    ))
                }
            </ContainerMenu>
        </Container> 
    </Body>
</>
);
}
export default PrincipalDashboard;
