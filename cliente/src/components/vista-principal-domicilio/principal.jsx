import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Axios from "axios"
// import Carrito from "../orden/principal"

import tablap from "../Img/bandeja.png"
import logo1 from "../Img/LOgo3.png"

import { Container,  Box2,Box3, Container2, Container4, Minibox1,  Minibox3,Minibox4  } from "./styled"
import Hearder from "../Header/header";
import {BsFacebook} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {FaInstagramSquare} from "react-icons/fa"

export const PrincipalConnect = () => {

const [sancocho, setSancocho] = useState([])
const [corriente, setCorriente] = useState([])
const [bebida, setBebida] = useState([])

const platosSancocho = () => {
    Axios.get("http://localhost:3002/api/platosSancocho").then((response)=>{
        setSancocho(response.data)
        console.log(response.data)
    })
    .catch(error => {
    })
}

const platosCorriente = () => {
    Axios.get("http://localhost:3002/api/platosCorriente").then((response)=>{
        setCorriente(response.data)
        console.log(response.data)
    })
    .catch(error => {
    })
}

const bebidas = () => {
    Axios.get("http://localhost:3002/api/bebidas").then((response) => {
        setBebida(response.data)
        console.log(response.data)
    })
    .catch(error => {
    })
}



useEffect(()=>{
    platosSancocho()
    platosCorriente()
    bebidas()
},[])


return(
<Container>
    <Hearder/>
    <Container2>
        <h1 style={{WebkitTextStroke:"1.1px black",fontWeight:"bold",textShadow:"5px 5px 5px black", color:"#ffffff", marginLeft:"3em", filter: "drop-shadow(-10px 25px 15px black)"}}>SANCOCHOS</h1>
        <Box2>
            {sancocho.map((comida, index)=>
            <Link to={`/pedido/${comida.id_plato}`} key={index} style={{textDecoration:"none"}} > {/* recibimos el id por medio de react-router*/}
            <Minibox1  key={index} >
                <img 
                src={"http://localhost:3002/" + comida.imagen} alt={comida.nombre_plato} style={{width:"15rem", filter: "drop-shadow(-15px 15px 10px black)", cursor:"pointer"}}></img>
                <div style={{backgroundImage:`url(${tablap}`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:"center",width:"20rem",height:"7.5rem",justifyContent:"center",alignItems:"center",opacity:"0.8", cursor:"pointer",filter: "drop-shadow(-8px 10px 3px black)"}}>
                    <h4 style={{margin:"0",marginTop:"3rem",fontSize:"20px", cursor:"pointer"}}> {comida.nombre_plato} </h4>
                    <h4 style={{margin:"0",fontSize:"20px", cursor:"pointer"}}> {comida.precio} </h4>
                </div>
            </Minibox1>                            
            </Link>
            )}
        </Box2>
        <h1 style={{WebkitTextStroke:"1.1px black",fontWeight:"bold",textShadow:"5px 5px 5px black", color:"#ffffff", marginLeft:"3em", filter: "drop-shadow(-10px 25px 15px black)"}}>CORRIENTES</h1>
        <Box2> 
            {corriente.map((comida, index)=>
            <Link to={`/pedido/${comida.id_plato}`} key={index} style={{textDecoration:"none"}} >
                <Minibox1  key={index}>
                    <img src={"http://localhost:3002/" + comida.imagen} alt={comida.nombre} style={{width:"15rem", filter: "drop-shadow(-15px 15px 10px black)", cursor:"pointer"}}></img>
                    <div style={{backgroundImage:`url(${tablap}`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:"center",width:"20rem",height:"7.5rem",justifyContent:"center",alignItems:"center",opacity:"0.8",filter: "drop-shadow(-8px 10px 3px black)", cursor:"pointer"}}>
                        <h4 style={{margin:"0",marginTop:"3rem",fontSize:"20px", cursor:"pointer"}}> {comida.nombre_plato} </h4>
                        <h4 style={{margin:"0",fontSize:"20px", cursor:"pointer"}}> {comida.precio} </h4>
                    </div>
                </Minibox1>
            </Link>
            )}
        </Box2>
        <h1 style={{ WebkitTextStroke:"1.1px black",fontWeight:"bold",textShadow:"5px 5px 5px black", color:"#ffffff", marginLeft:"3em", filter: "drop-shadow(-10px 25px 15px black)"}}>BEBIDAS</h1>
        <Box3>
            {bebida.map((jugo,index) =>
            <Link to={`/pedidoBebida/${jugo.id_bebida}`} key={index} style={{textDecoration:"none"}}>
                <Minibox1 key={index}>
                    <img src={"http://localhost:3002/" + jugo.imagen} alt={jugo.nombre_bebida} style={{width:"15rem", filter: "drop-shadow(-15px 15px 10px black)", cursor:"pointer"}}></img>
                    <div style={{backgroundImage:`url(${tablap}`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:"center",width:"20rem",height:"7.5rem",justifyContent:"center",alignItems:"center", opacity:"0.8",filter: "drop-shadow(-8px 10px 3px black)",marginLeft:"13px", cursor:"pointer"}}>
                        <h4 style={{margin:"0", marginTop:"3rem",fontSize:"20px", cursor:"pointer"}}> {jugo.nombre_bebida}</h4>
                        <h4 style={{margin:"0",fontSize:"20px", cursor:"pointer"}}> {jugo.precio}</h4>
                    </div>
                </Minibox1>
            </Link>
            )}  
        </Box3>
        <Container4>
            <Minibox3>
                <Minibox4 style={{backgroundImage: `url(${logo1})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center", filter: "drop-shadow(-0px -7px 5px white)"}}></Minibox4>
                <span style={{fontSize:"20px"}}>Disfruta © 2023</span>
                <span style={{fontSize:"20px"}}>todos los derechos reservados</span>
                <span style={{fontSize:"20px"}}> desarrolado por el grupo de la muerte</span>
            </Minibox3>
            <Minibox3>
                <h2 style={{WebkitTextStroke:"1.1px black",fontWeight:"bold",textShadow:"5px 5px 5px black",filter: "drop-shadow(-0px 0px 0px black)", fontSize:"29px"}}>Contactanos</h2>
                <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}><span style={{fontSize:"20px", color:"white", textDecoration:"none"}}>320 5847516</span></a>
                <span></span>
                <span></span>
            </Minibox3>
            <Minibox3>
                <h2 style={{WebkitTextStroke:"1.1px black",fontWeight:"bold",textShadow:"5px 5px 5px black",filter: "drop-shadow(-0px 0px 0px black)", fontSize:"29px"}}>Siguenos</h2>
                <div style={{justifyContent:"space-evenly",width:"9rem",display:"flex"}}>
                <a href="https://m.facebook.com/login/?locale=es_ES" target="_blank" rel="noreferrer"><BsFacebook style={{fontSize:"30PX",color:"#0011ff", backgroundColor:"white", borderRadius:"14px"}}></BsFacebook></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagramSquare style={{fontSize:"32px", color:"hsl(285, 90%, 50%)",borderRadius:"80px",background:"white"}}></FaInstagramSquare></a>
                <a href="https://www.youtube.com/@lacocinadejorgerausch" target="_blank" rel="noreferrer"><BsYoutube style={{fontSize:"32px", color:"hsl(0, 89.80392156862744%, 50%)",background:"none"}}></BsYoutube></a>
                </div>
            </Minibox3>
        </Container4>
    </Container2>
</Container>
)
}