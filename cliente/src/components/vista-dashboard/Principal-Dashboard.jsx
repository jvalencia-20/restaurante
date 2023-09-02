import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {Body, Container, Header, ContainerHeader, Boton, CajaNav, CajaLogo, ContainerMain, ContainerMenu, ContainerFooter} from "./styles-princDashboard"
import { LOGOUT } from "../router/path";
function PrincipalDashboard() {
return (

<Body>
    <Container>
        <ContainerHeader>    
            <Header>
                <CajaLogo >
                    
                    <h1>Dashboard</h1>
                </CajaLogo>
                <div style={{fontSize:"20px"}}><Link to={LOGOUT}><Boton style={{height:"80px"}}>🔚Cerrar sesión</Boton></Link></div>
            </Header>
        </ContainerHeader>
        <CajaNav>
                    <Link to="/private"><Boton>🏠Inicio</Boton></Link>
                    <Link to="/private/dashboard"><Boton>🍝Agregar Plato</Boton></Link> 
                    <Link to="/private/register"><Boton>👤Crear Usuario</Boton></Link>
                    <Link to="/private/crearProducto"><Boton>📦Agregar Producto</Boton></Link>    
                    <Link to="/private/inventario"><Boton>📚 inventario</Boton></Link>
        </CajaNav>      
        <ContainerMain>
            <Outlet/>
        </ContainerMain>
        <ContainerMenu>Aqui ira algo</ContainerMenu>
        <ContainerFooter><h1>Footer</h1></ContainerFooter>
    </Container> 
</Body>
);
}

export default PrincipalDashboard;