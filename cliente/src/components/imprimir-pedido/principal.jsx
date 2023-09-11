import React from "react";

import { Container, Container2, } from "./styled"; 

export const Imprimir = () => {
    return(
    <>
        <Container>
            <Container2>
                <h1 style={{margin:"0",marginBottom:"10px"}}>Plato : </h1>
                <h1 style={{margin:"0",marginBottom:"19px"}}>Bebida : </h1>
            </Container2>
        </Container>
    </>
    )
}