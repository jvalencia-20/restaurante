import React  from "react"
import {Outlet, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import { HiOutlineShoppingCart, } from "react-icons/hi"
import { Container, Container2, Minibox2, Button, Notificacion, Box1, Background } from "./styled";
import Carrito from "../orden/principal";
import { Link } from "react-router-dom";
import { Container4, Minibox3, Minibox4 } from "./styled";
import {BsFacebook} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {FaInstagramSquare} from "react-icons/fa"
import logo1 from "../Img/LOgo3.png"
import fondo from "../Img/FondoInfor.jpg"

const TodoFisica = () => {
    const [activo, setActivo] = useState(false)
    const [notificacion, setNotificacion] = useState(0)
    const [platos, setPlatos] = useState([])
    const navigate = useNavigate()
//     useEffect(() => {
//     setNotificacion(platos.length)
//     const platoLocalStorage = JSON.parse(localStorage.getItem("platico"));
//     setPlatos(platoLocalStorage);
// }, [platos])

// useEffect(()=>{
//     navigate("/private/todofisica/fisica") 
// },[])

return (
    <Background style={{backgroundImage:`url(${fondo})`, backgroundSize:"cover"}}>
        <Container>
            <Box1><h1 style={{color:"#ffffff93", margin:"0", filter:"drop-shadow(-5px 10px 6px black)"}}>Platos</h1></Box1>
            <Minibox2>
                <Button style={{fontSize:"60px", cursor:"pointer"}} onClick={()=> setActivo(!activo)}>
                    <HiOutlineShoppingCart style={{filter:"drop-shadow(-5px 1px 3px black)"}}></HiOutlineShoppingCart>
                    <Notificacion style={{fontSize:"22px", filter:"drop-shadow(-1px 10px 5px black)"}}>{notificacion}</Notificacion>
                </Button>
                {activo  && <Carrito/> }
            </Minibox2>
        </Container>
        <div >
            <Outlet/>
        </div>
    </Background>
    )
}

export default TodoFisica