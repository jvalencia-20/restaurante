import React from "react";
import {Link} from "react-router-dom"
import {Container, Conatiner2, Box, Box2, Container3, Box3, Box4, Salir} from "./styled"
import {  BsBoxArrowLeft } from "@react-icons/all-files/bs/BsBoxArrowLeft";

export const Domicilio = () => {
    return(
    <>
        <Container>
            <Conatiner2>
                <Box><h2>Domicilio</h2></Box>
                <Box2><h2>Agrega tu datos para hacer la entrega</h2></Box2>
                <Container3>
                    <Box3>
                        <span style={{paddingBottom:"50px",paddingTop:"20px"}}>Nombre:</span>
                        <span style={{paddingBottom:"50px",paddingTop:"10px"}}>Direccion:</span>
                        <span style={{paddingBottom:"50px"}}>Especifique el lugar de entrega:</span>
                    </Box3>
                    <Box4>
                        <input type="text" style={{marginBottom:"50px",color:"white",marginTop:"15px",padding:"6px 12px",backgroundColor:"transparent"}} />
                        <input type="text" style={{marginBottom:"40px",color:"white",padding:"6px 12px",backgroundColor:"transparent"}}/>
                        <input type="text" style={{marginBottom:"50px",color:"white",paddingBottom:"50px",padding:"15px 12px",backgroundColor:"transparent"}}/>
                    </Box4>
                </Container3>
                <button style={{width:"6rem",height:"2rem",marginTop:"70px",fontSize:"16px",backgroundColor:"transparent",color:"white"}}>Enviar</button>
            </Conatiner2>
            <Link to="/principal">
                <Salir>
                    <BsBoxArrowLeft style={{fontSize:"29px"}}></BsBoxArrowLeft>
                </Salir>
            </Link>
        </Container>
    </>
    )
}