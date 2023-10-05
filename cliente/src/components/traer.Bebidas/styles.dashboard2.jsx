import styled from "styled-components"
import pizarra from "../Img/pizarra.jpeg"
import nota from "../Img/notaadd.png"
import borrar from "../Img/borrar.png"

export const Pagina = styled.div`
    height: 100vh;
    width: 100%;
`;

export const Background = styled.div`
    height: 100%;
    width: 100%;
`;

export const Receta = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;

export const ContentImg = styled.div`
    height: 230px;
    width: 220px;
    background-image: url(${nota});
    background-repeat: no-repeat;
    background-size: 97%;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImgPlato = styled.img`
    height: 135px;
    width: 130px;
    margin-right: 15px;
    transform: rotate(-3deg);
    position: relative;;
    left: 3%;
    top: -2%;
`;

export const DivPrincipal = styled.div`
    height: 100%;
    width: 90%;
    background-color: aqua;
    background-image: url(${pizarra});
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    box-shadow: 8px 12px 9px 10px rgba(0, 0, 0, 0.75);
    position: relative;
    overflow-y: auto;
    &::-webkit-scrollbar-thumb {
        background: #000000; 
        border-radius: 10px;
    }
    &::-webkit-scrollbar {
        background: transparent;
        border-radius: 10px;
    }
    @media  screen and (max-width: 670px ) {
    }
    @media  screen and (min-width: 1020px ) {
        height: 60%;
        width: 80%;
    }
    @media  screen and (max-height: 450px ) {
        height: 200%;
        box-shadow: none;
    }
`;

export const Contendiv = styled.div`
    position: relative;
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    color: white;
`;

export const Borrar = styled.button`
    width: 80px;
    height: 80px;
    background-image: url(${borrar});
    background-repeat: no-repeat;
    background-size: 96%;
    background-position: center;
    background-color: transparent;
    border: none;
    &:hover{
        rotate: 30deg;
        cursor: pointer;
    }
`;

export const DivFilas = styled.div`
    width:100%;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;


export const Editar = styled.button`
    border: none;
    width: 80px;
    height: 45px;
    background-color: black;
    color: white;
    border-radius:20px;
    cursor: pointer;
`;
