import React from "react";
import styled from "styled-components";
import Envio from "../Img/muve.gif"
import Finalizar from "../Img/cross-logo.gif"
import { Link, useNavigate } from "react-router-dom";


const Enviar = () => {
  const navigate = useNavigate()
  setTimeout(() => {
    navigate("/menu")
  }, 2000);
  return (
    <div>
      <Fondo>
        <Container>
          <Salir>
            <Link to="/menu">
              <Salida></Salida>
            </Link>
          </Salir>
          <Mensaje>
            <h1 style={{margin:"0"}}>
              Su Pedido fue enviado
            </h1>
          </Mensaje>
          <Exito></Exito>
        </Container>
      </Fondo>      
    </div>
  )
}

export default Enviar

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

const Salida = styled.button`
  background-image: url(${Finalizar});
  background-size: cover;
  background-position: center;
  margin-bottom: 50em;
  border-radius: 2em;
  border: 3px solid black;
  height: 4em;
  width: 4em;
  margin: 1em;
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
  background-image: url(${Envio});
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