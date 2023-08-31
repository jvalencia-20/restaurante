import React from "react";
import { Container4, Minibox3, Minibox4 } from "./styled";
import {BsFacebook} from "react-icons/bs"
import {FaInstagramSquare} from "react-icons/fa"
import logo1 from "../Img/LOgo3.png"

const Footer = () => {
return (
    <>
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
                    </div>
                </Minibox3>
        </Container4>
    </>
)
}

export default Footer