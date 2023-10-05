import styled from "styled-components"
import pizarra from "../Img/pizarra.jpeg"
import nota from "../Img/notaadd.png"
import cargar from "../Img/SUBIR.png"


export const Pagina = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DivPrincipal = styled.div`
    height: 90%;
    width: 80%;
    background-image: url(${pizarra});
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    border-radius: 8px;
    box-shadow: 8px 12px 9px 10px rgba(0, 0, 0, 0.75);
    position: relative;
    @media  screen and (max-width: 670px ) {
        height: 120%
    }
    @media  screen and (min-width: 1020px ) {
        flex-direction: row;
        justify-content: center;
        height: 60%;
        width: 70%;
    }
    @media  screen and (max-height: 450px ) {
        height: 200%;
        box-shadow: none;
    }
`;

export const Hoja1 = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Hoja2 = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media  screen and (min-width: 1250px ) {
        height: 50%;
    }
`;

export const ConInfor = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff94;
`;

export const Div = styled.div`
`;

export const Name = styled.div`
    color: white;
    font-size: 20px;
`;

export const Infor = styled.input`
    background-color: transparent;
    color: white;
    border-radius: 8px;
    height: 30px;
    width: 20em;
    margin-top: 2em;
`;

export const Infor2 = styled.input`
`;

export const Entrar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 90px;
    font-size: 28px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: 90%;
    background-position: center;
`;

export const InforImg = styled.input`
    border: none;
    font-family: 'Indie Flower', cursive;
`;

export const SpanImg = styled.span`
`;

export const LabelImg = styled.label`
    height: 80px;
    width: 85px;
    background-repeat: no-repeat;
    background-size: 89%;
    background-position: center;
    border-radius: 40%;
    background-image:url(${cargar}) ;
    cursor: pointer;
`;

export const ContentImg = styled.div`
    height: 300px;
    width: 250px;;
    background-image: url(${nota});
    background-repeat: no-repeat;
    background-size: 97%;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    @media  screen and (max-height: 600px ) {
        height: 210px;
        width: 150px;
    }
`;

export const ImgPlato = styled.img`
    height: 180px;
    width: 160px;
    margin-right: 15px;
    transform: rotate(-3deg);
    position: relative;
    left: 3%;
    top: -2%;
    @media  screen and (max-height: 600px ) {
        height: 100px;
        width: 95px;
        left: 4%;
    }
`;
