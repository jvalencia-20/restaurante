import styled from "styled-components";
import nota from "../../Img/notaadd.png"
import "../../../App.css"

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
    background-color: var(--color-negro);
    display: flex;
    justify-content: center; 
    align-items: center;
    border-radius: 8px;
    position: relative;
    @media  screen and (max-width: 670px ) {
        height: 120%
    }
    @media  screen and (min-width: 1020px ) {
        flex-direction: row;
        justify-content: center;
        height: 60%;
        width: 80%;
    }
    @media  screen and (max-height: 450px ) {
        height: 100%;
        width: 70%;
        box-shadow: none;
    }
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
    border: 1px solid #ffff;
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
    height: 200px;
    width: 200px;
    background-color: #acacac6e;
    background-repeat: no-repeat;
    background-size: 97%;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
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

export const Entrar = styled.button`
    border: none;
    width: 130px;
    height: 3em;
    background-color: var(--color-azul);
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size:18px;
`;