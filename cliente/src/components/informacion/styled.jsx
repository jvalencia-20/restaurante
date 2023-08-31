import styled from "styled-components";
import fondo from "../Img/FondoInfor.jpg"

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${fondo});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-wrap: wrap;
    align-items: center; 
`;

export const ConteCarrusel = styled.div`
  width: 100%;
  height: 38em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Contenedor = styled.div`
  height: 34em;
  border-radius: 1em;
`;
