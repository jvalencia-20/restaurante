import styled from "styled-components";
import FondoComida from "../Img/fondoComida.jpg"

export const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Platos = styled.div`
  height: 35em;
  width: 55em;
  box-shadow: 10px 10px 10px black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(2px); 
  background-color: #878787ae;
  @media screen and (max-width: 900px) {
    width: 40em;
  }
  @media screen and (max-width: 660px) {
      width: 30em;
  }    
  @media screen and (max-width: 500px) {
      width: 22em;
  }
`;

export const Titulo = styled.div`
  width: 60em;
  height: 4em;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 900px) {
        width: 40em;
  }
  @media screen and (max-width: 660px) {
      width: 30em;
  }
  @media screen and (max-width: 500px) {
      width: 20em;
      margin-left: 1em;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 50em;
  width: 70em;
  @media screen and (max-width: 900px) {
        width: 40em;
  }
  @media screen and (max-width: 660px) {
      width: 30em;
  }
  @media screen and (max-width: 500px) {
      width: 22em;
  }
`;

export const Logito = styled.img`
  height: 5em;
`;

export const NomPlato = styled.h1`
`;

export const Contenido = styled.h3`
`;

export const ConImg = styled.div`
  height: 30em;
  width: 30em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
        width: 25em;
  }
  @media screen and (max-width: 660px) {
      width: 15em;
  }
  @media screen and (max-width: 500px) {
      width: 10em;
  }
`;

export const CajaImg = styled.div`
  background-image: url(${FondoComida});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: -2px 10px 10px black;
  border-radius: 15px;
  margin-top: 2em;
  height: 20em;
  width: 25em;
  @media screen and (max-width: 900px) {
        width: 20em;
  }
  @media screen and (max-width: 660px) {
      width: 15em;
      height: 15em;
  }
  @media screen and (max-width: 500px) {
      width: 10em;
      height: 10em;
  }
`;

export const ImgPlato = styled.img`
  border-radius: 15px;
  height: 20em;
  width: 25em;
  @media screen and (max-width: 900px) {
        width: 20em;
  }
  @media screen and (max-width: 660px) {
      width: 15em;
      height: 15em;
  }
  @media screen and (max-width: 500px) {
      width: 10em;
      height: 10em;
  }
`;

export const Aumentar = styled.div`
  height: 5em;
  width: 30em;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 900px) {
      flex-direction: column;
      width: 15em;
  }
`;

export const Botones = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  height: 2em;
  width: 5em;
  background-color: transparent;
  border: 2px solid #000;
  border-radius: 0.5em;
  &:hover {
      border: 2px solid #fff;
      color: #fff;
      background-color: #000;
      box-shadow: 1px 0px 20px #000;
  }
`;

export const Agregar = styled.button`
  height: 2em;
  width: 10em;
  background-color: transparent;
  margin-left: 15px;
  margin-right: 15px;
  border: 2px solid #000;
  border-radius: 0.5em;
  &:hover {
      border: 2px solid #fff;
      color: #fff;
      background-color: #000;
      box-shadow: 1px 0px 20px #000;
  }
  @media screen and (max-width: 900px) {
      margin-top: 1em;
  }
`;

export const Plato = styled.div`
  height: 30em;
  width: 23em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 500px) {
      width: 12em;
  }
`;
