import React from "react";
import Axios from "axios"
import { useState, useEffect } from "react";
import { HiOutlineShoppingCart, } from "react-icons/hi"
import { Container3, Minibox2, Button, Notificacion, Box1 } from "./styled";
import Carrito from "../orden/principal";
import { Link } from "react-router-dom";
import {PUBLIC} from "../router/path"

const Hearder = () => {
  const [activo,setActivo] = useState(false)
  const [notificacion, setNotificacion] = useState("")
  const Compra = () => {
    Axios.get("http://localhost:3002/api/compras")
        .then((response) => {     
        if (response.data.length > 0){
            setNotificacion(response.data.length)
        } else {
            setNotificacion(0)
        }
        Compra();
        })
        .catch(error => {
        console.error("Error al eliminar el producto:", error);
        }); 
}
useEffect(()=>{
  Compra()
},[])

  return (
    <div>
    <Container3>
      <Box1><h1 style={{color:"#ffffff93", margin:"0", filter:"drop-shadow(-5px 10px 6px black)"}}>Platos</h1></Box1>
      <Minibox2>
        <Button style={{fontSize:"60px", cursor:"pointer"}} onClick={()=> setActivo(!activo)}>
          <HiOutlineShoppingCart style={{filter:"drop-shadow(-5px 1px 3px black)"}}></HiOutlineShoppingCart>
          <Notificacion style={{fontSize:"22px", filter:"drop-shadow(-1px 10px 5px black)"}}>{notificacion}</Notificacion>
        </Button>
        <Link to="/informacion" style={{textDecoration:"none"}}>
          <Button>
            <h1 style={{cursor:"pointer"}}>Informacion</h1>
          </Button>            
        </Link>
        <Link to={PUBLIC} style={{textDecoration:"none"}}>
          <Button>
            <h1 style={{cursor:"pointer"}}>Menu</h1>
          </Button> 
        </Link>
        <Link to="/reserva" style={{textDecoration:"none"}}>
          <Button>
            <h1 style={{cursor:"pointer"}}>Reserva</h1>
          </Button> 
        </Link> 
        <Link to="/mesa" style={{textDecoration:"none"}}>
          <Button>
            <h1 style={{cursor:"pointer"}}>mesa</h1>
          </Button> 
        </Link> 
        {activo && <Carrito/>}
      </Minibox2>
    </Container3>
    </div>
  )
}

export default Hearder