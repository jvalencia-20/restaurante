import styled from "styled-components";
import Cocina from "../Img/Ordenes.jpg"
import FondoComida from "../Img/fondoComida.jpg"


export const Background = styled.div`
    background-image: url(${Cocina});
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Platos = styled.div`
    background-color: #878787ae;
    height: 46em;
    width: 60em;
    box-shadow: 10px 10px 10px black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
    height: auto;
    width: 90%;
    }
`;

export const Titulo = styled.div`
    width: 60em;
    height: 4em;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
    height: auto;
    width: 90%;
    }
`;

export const Container = styled.div`
    display: flex;
    height: 50em;
    width: 70em;
    @media screen and (max-width: 98vh){
    height: 50em;
    width: 40em;
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
    height: 42em;
    width: 30em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
    width: 90%;
    margin-top: 2em;
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
    @media screen and (max-width: 768px) {
        width: 95%;
        height: auto;
    }
`;

export const ImgPlato = styled.img`
    border-radius: 15px;
    height: 20em;
    width: 25em;
    @media screen and (max-width: 768px) {
    width: 95%;
    height: auto;
    }
`;

export const Aumentar = styled.div`
    height: 5em;
    width: 30em;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
    width: 90%;
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
`;

export const Agregar = styled.button`
    height: 2em;
    width: 10em;
    background-color: transparent;
    border: 2px solid #000;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 0.5em;
`;

export const Plato = styled.div`
    height: 42em;
    width: 30em;
    display: flex;
    flex-direction: column;
`;

export const Adicional = styled.div`
    width: 20em;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
    width: 100%;
    }
`;

export const Infor = styled.input`
    width: 15em;
    height: 2em;
    border: 2px solid #000;
    margin-top: 2em;
    background-color: transparent;
    border-radius: 5px;
    @media screen and ( max-width: 90vh){   
    height: 2em;
    width: 20em; 
    }
`;
