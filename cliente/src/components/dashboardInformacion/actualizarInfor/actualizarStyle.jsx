import styled from "styled-components";
import pizarra from "../../Img/pizarra.jpeg"
import nota from "../../Img/notaadd.png"


export const Pagina = styled.div`
    height: 85vh;
    width: 100%;
`;

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;

export const DivPrincipal = styled.div`
    height: 90%;
    width: 90%;
    background-image: url(${pizarra});
    display: flex;
    justify-content: center; 
    align-items: center;
    border-radius: 8px;
    box-shadow: 8px 12px 9px 10px rgba(0, 0, 0, 0.75);
    position: relative;
`;

export const Hoja1 = styled.form`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffff;
`;

export const Hoja2 = styled.form`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media  screen and (min-width: 1250px ) {
    height: 50%;
    }
`;

export const Infor = styled.input`
    background-color: transparent;
    color: white;
    border-radius: 8px;
    height: 30px;
    width: 20em;
`;

export const ConInfor = styled.div`
    height: 480px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff94;
`;

export const ContentImg = styled.div`
    height: 300px;
    width: 250px;
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

export const Entrar = styled.div`
    height: 50px;
    width: 90px;
    font-size: 25px;
    margin-top: 20px;
    background-repeat: no-repeat;
    background-size: 90%;
    background-position: center;
`;