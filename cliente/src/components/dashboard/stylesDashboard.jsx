import styled from "styled-components"
import Fondo from "../imgdashboard/FondoDashboard.jpg"
import FondoCuaderno from "../imgdashboard/cuadernocaja.png"
import guardarimg from "../imgdashboard/guardarimg.png"
import contenedorimg from "../imgdashboard/contenedorimg.png"
import nota from "../imgdashboard/nota.png"
import Guardar from "../imgdashboard/botonguardar.png"
import sticker1 from "../imgdashboard/sticker.png"
import sticker2 from "../imgdashboard/sticker2.png"

export const Pagina = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Background = styled.div`
    background-image: url(${Fondo});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Receta = styled.div`
    height: 600px;
    width: 1000px;
    background-image: url(${FondoCuaderno});
    background-repeat: no-repeat;
    background-size: 110%;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: space-evenly ;
    font-family: 'Indie Flower', cursive;
    filter: drop-shadow(5px, 5px, 5px, black);
    transform: rotate(3deg);
`;

export const Hoja1 = styled.div`
    height: 450px;
    width: 315px;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
`;

export const Hoja2 = styled.div`
    height: 500px;
    width: 300px;
    margin-right: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const ConInfor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 350px;
`;

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Name = styled.div`
    font-size: 20px;
    font-weight: bold;
    background-color: transparent;
`;

export const Infor = styled.input`
    border: none;
    font-family: 'Indie Flower', cursive;
    font-size: 18px;
    width: 150px;
    color: #8b7702;
`;

export const Infor2 = styled.textarea`
    border: none;
    font-family: 'Indie Flower', cursive;
    font-size: 18px;
    font-weight: bold;
    width: 150px;
    color: #8b7702;
`;

export const Entrar = styled.div`
    height: 90px;
    width: 150px;
    background-image: url(${Guardar});
    background-repeat: no-repeat;
    background-size: 75%;
    background-position: center;
    background-color: none;
    box-shadow: none;
    border-radius: 40%;
    border: none;
`;

export const InforImg = styled.input`
    border: none;
    font-family: 'Indie Flower', cursive;
`;

export const SpanImg = styled.span`
`;

export const LabelImg = styled.label`
    height: 80px;
    width: 130px;
    background-image: url(${guardarimg});
    background-repeat: no-repeat;
    background-size: 90%;
    background-position: center;
    border-radius: 40%;
`;

export const ContentImg = styled.div`
    height: 280px;
    width: 280px;
    background-image: url(${contenedorimg});
    background-repeat: no-repeat;
    background-size: 178%;
    background-position: center -10%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImgPlato = styled.img`
    height: 180px;
    width: 160px;
    margin-right: 15px;
`;

export const Nota = styled.div`
    height: 80px;
    width: 140px;
    background-image: url(${nota});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center 15%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Sticker = styled.div`
    top: 10px;
    height: 80px;
    width: 80px;
    background-image: url(${sticker1});
    background-repeat: no-repeat;
    background-size: 109%;
    background-position: center;
    background-color: none;
    box-shadow: none;
    border-radius: 40%;
`;

export const Sticker2 = styled.div`
    margin-left: 80%;
    height: 80px;
    width: 80px;
    background-image: url(${sticker2});
    background-repeat: no-repeat;
    background-size: 109%;
    background-position: center;
    background-color: none;
    box-shadow: none;
    border-radius: 40%;
`;
