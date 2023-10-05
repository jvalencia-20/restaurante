import styled from "styled-components";
import pizarra from "../../Img/pizarra.jpeg"

export const Fondo = styled.div`
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

export const Container = styled.div`
    // background-color:  #000;
    background-image: url(${pizarra});
    position: absolute;
    z-index: 0;
    height: 33em;
    width: 30em;
    border-radius: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(6px 15px 8px black);
`;

export const Salir = styled.div`
    height: 5em;
    width: 30em;
    display: flex;
    justify-content: end;
`;

export const Salida = styled.button`
    background-color: #141414;
    background-size: cover;
    background-position: center;
    margin-bottom: 50em;
    border: none;
    border-radius: 2em;
    height: 4em;
    width: 4em;
    margin: 1em;
    color: white;
&:hover{
    color: #ffffff6a;
    };
`;

export const Mensaje = styled.div`
    height: 4em;
    width: 30em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
`;

export const Form = styled.div`
    // background-color: #000;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 19em;
    width: 30em;
    display: flex;
    align-items: center;
    justify-content: end;
`;

export const ConInfor = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const Infor = styled.input`
    width: 23em;
    height: 2em;
    border: 1px solid #ffff;
    background-color: transparent;
    border-radius: 5px;
    color: #12011d;
@media screen and ( max-width: 90vh){   
    height: 2em;
    width: 20em; 
}
`;

export const Div = styled.div`
    width: 13em;
    height: 6em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InforImg = styled.input`
    border: none;
    font-family: 'Indie Flower', cursive;
`;

export const SpanImg = styled.span`
`;

export const LabelImg = styled.label`
    height: 50px;
    width: 85px;
    background-repeat: no-repeat;
    background-size: 89%;
    background-position: center;
    border-radius: 8%;
    // background-color: #12011d ;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: white;
    &:hover{
        color: #7c7b7b;
        // background: #A945C7;
    }
`;

export const ContentImg = styled.div`
    height: 200px;
    width: 200px;
    background-color: #acacac6e;
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
    position: relative;
    left: 3%;
    top: 1%;
    @media  screen and (max-height: 600px ) {
        height: 100px;
        width: 95px;
        left: 4%;
    }
`;

export const Nota = styled.div`
`;