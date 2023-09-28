import React  from "react"
import {Outlet, useNavigate} from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import { HiOutlineShoppingCart, } from "react-icons/hi"
import { Container, Minibox2, Button, Notificacion, Box1, Background } from "./styled";
import { Link } from "react-router-dom";
import fondo from "../Img/FondoInfor.jpg"
import CarritoFisica from "../orden-fisica/principal";
import { LOGOUT } from "../router/path";

const TodoFisica = () => {
    const [activo, setActivo] = useState(false)
    const [notificacion, setNotificacion] = useState(0)
    const [platos, setPlatos] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
    const plato = JSON.parse(localStorage.getItem("platico"));
    if (Array.isArray(plato)) {
        setPlatos(plato);
        setNotificacion(plato.length)
    }
    }, []);

  //para cerrar el carrito
    const modalRef = useRef(null);
    const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      // Si el clic fue fuera de la ventana modal, ciérrala
        setActivo(!activo);
    }
    };

return (
    <Background>
        <Container>
            <Box1><h1 style={{color:"#ffffff93", margin:"0", filter:"drop-shadow(-5px 10px 6px black)"}}>Platos</h1></Box1>
            <Minibox2>
                <Button style={{fontSize:"60px", cursor:"pointer"}} onClick={()=> setActivo(!activo)}>
                    <HiOutlineShoppingCart style={{filter:"drop-shadow(-5px 1px 3px black)"}}></HiOutlineShoppingCart>
                    <Notificacion style={{fontSize:"22px", filter:"drop-shadow(-1px 10px 5px black)"}}>{notificacion}</Notificacion>
                </Button>
                {activo  && <div ref={modalRef}><CarritoFisica /></div> }
                <Link to="/private/todofisica/selectfactura" style={{textDecoration:"none"}}>
                    <Button><h1 style={{cursor:"pointer"}}>Domicilio</h1></Button> 
                </Link>
                <Link to="/private/todofisica/mesa" style={{textDecoration:"none"}}>
                    <Button><h1 style={{cursor:"pointer"}}>Mesa</h1></Button> 
                </Link>
                <Link to={LOGOUT} style={{textDecoration:"none"}}>
                    <Button><h1 style={{cursor:"pointer"}}>Cerrar sesion</h1></Button> 
                </Link>
            </Minibox2>
        </Container>
        <div >
            <Outlet/>
        </div>
    </Background>
    )
}

export default TodoFisica