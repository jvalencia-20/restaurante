import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center; 
`;

export const ConteCarrusel = styled.div`
  width: 100%;
  height: 45em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3em;
`;

export const Contenedor = styled.div`
  height: 40em;
  width: 70em;
  color: #ffff;
  border-radius: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1450px) {
    width: 60em;
  }
  @media screen and (max-width: 1000px) {
    width: 40em;
  }
  @media screen and (max-width: 700px) {
    width: 20em;
  }
`;