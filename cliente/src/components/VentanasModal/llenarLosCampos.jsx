import React from "react";
import styled from "styled-components";
import Llenar from "../Img/llenar_todo.png"
import Finalizar from "../Img/cross-logo.gif"

const Llena = () => {
  return (
    <div>
      <Fondo>
        <Container>
          <Salir>
          </Salir>
          <Mensaje>
            <h1 style={{margin:"0"}}>
              Ingrese todos los datos
            </h1>
          </Mensaje>
          <Exito></Exito>
        </Container>
      </Fondo>      
    </div>
  )
}

export default Llena

const Fondo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: #ffffff;
  position: absolute;
  z-index: 0;
  height: 25em;
  width: 30em;
  border-radius: 2em;
  filter: drop-shadow(6px 15px 8px black);
  @media screen and (max-width: 900px) {
    height: 20em;
    width: 23em;
    }
`;

const Salir = styled.div`
  height: 5em;
  width: 30em;
  display: flex;
  justify-content: end;
  @media screen and (max-width: 900px) {
    width: 23em;
    }
`;

const Mensaje = styled.div`
  height: 4em;
  width: 30em;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 900px) {
    width: 23em;
    }
`;

const Exito = styled.div`
  background-image: url(${Llenar});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 16em;
  width: 30em;
  display: flex;
  align-items: center;
  justify-content: end;
  @media screen and (max-width: 900px) {
    height: 10em;
    width: 23em;
    }
`;