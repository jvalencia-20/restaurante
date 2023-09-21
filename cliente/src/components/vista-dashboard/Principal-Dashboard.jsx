import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";
import {Body, Container, Header, ContainerHeader, Boton, CajaNav, CajaLogo, ContainerMain, ContainerMenu, ContainerFooter} from "./styles-princDashboard"
import { LOGOUT } from "../router/path";
import Axios from "axios"
import { useAuthContext } from "../context/AuthContext"
import Paila from "../VentanasModal/paila";
import Comprobando from "../VentanasModal/comprobando";

function PrincipalDashboard() {
    const navegate = useNavigate()
    const [comprobar, setComprobar] = useState(true) 
    const [producto, setProducto] = useState([]);
    const { token, logout } = useAuthContext();
    const ubicacion = useLocation()
    const [user, setUser] = useState("")
    const [destokenado, setDestokenado] = useState("")
    const [activo, setActivo] = useState(false)
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
        setActivo(true) 
    }
    }
    const cliente = async () => {
    await Axios.get(`http://localhost:3002/api/admin/${destokenado}`,{
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
                    <div style={{fontSize:"20px"}}><Link to={LOGOUT}><Boton style={{height:"80px", color:"white", textShadow:"0 0 10PX #A945C7,0 0 40PX #A945C7, 0 0 80PX #A945C7"}}>🔚Cerrar sesión</Boton></Link></div>
                </Header>
            </ContainerHeader>
            <CajaNav>
                <Link to="/private"><Boton>🏠Inicio</Boton></Link>
                <Link to="/private/dashboard"><Boton>🍝Agregar Plato</Boton></Link>
                <Link to="/private/crearBebida"><Boton>🍹Agregar Bebida</Boton></Link>
                <Link to="/private/register"><Boton>👤Crear Usuario</Boton></Link>
                <Link to="/private/crearProducto"><Boton>📦Agregar Producto</Boton></Link>
                <Link to="/private/traerAdmin"><Boton>👨‍💼Administradores</Boton></Link>
                <Link to="/private/traerPlato"><Boton>🥗Platos</Boton></Link>
                <Link to="/private/traerBebida"><Boton>🍸Bebidas</Boton></Link>
                <Link to="/private/inventario"><Boton>📚 Inventario</Boton></Link>
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


