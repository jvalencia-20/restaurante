import React  from "react"
import {Outlet, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import { HiOutlineShoppingCart, } from "react-icons/hi"
import { Container, Minibox2, Button, Notificacion, Box1, Background } from "./styled";
import { Link } from "react-router-dom";
import logo1 from "../Img/LOgo3.png"
import fondo from "../Img/FondoInfor.jpg"
import CarritoFisica from "../orden-fisica/principal";

const TodoFisica = () => {
    const [activo, setActivo] = useState("")
    const [notificacion, setNotificacion] = useState(0)
    const [platos, setPlatos] = useState([])
    const navigate = useNavigate()

//     useEffect(() => {
//     setNotificacion(platos.length)
//     const platoLocalStorage = JSON.parse(localStorage.getItem("platico"));
//     setPlatos(platoLocalStorage);
// }, [])

useEffect(()=>{
    navigate("/private/todofisica/fisica") 
},[])

return (
    <Background style={{backgroundImage:`url(${fondo})`, backgroundSize:"cover"}}>
        <Container>
            <Box1><h1 style={{color:"#ffffff93", margin:"0", filter:"drop-shadow(-5px 10px 6px black)"}}>Platos</h1></Box1>
            <Minibox2>
                <Button style={{fontSize:"60px", cursor:"pointer"}} onClick={()=> setActivo(!activo)}>
                    <HiOutlineShoppingCart style={{filter:"drop-shadow(-5px 1px 3px black)"}}></HiOutlineShoppingCart>
                    <Notificacion style={{fontSize:"22px", filter:"drop-shadow(-1px 10px 5px black)"}}>{notificacion}</Notificacion>
                </Button>
                {activo  && <CarritoFisica/> }
            </Minibox2>
        </Container>
        <div >
            <Outlet/>
        </div>
    </Background>
    )
}

export default TodoFisica