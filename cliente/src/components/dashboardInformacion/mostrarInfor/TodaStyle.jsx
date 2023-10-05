import styled from "styled-components";
import pizarra from "../../Img/pizarra.jpeg"
import borrar from "../../Img/borrar.png"

export const Container = styled.div`
    height: 85vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;

export const SubContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;

export const InforTodo = styled.div`
    height: 100%;
    width: 90%;
    background-image: url(${pizarra});
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    box-shadow: 8px 12px 9px 10px rgba(0, 0, 0, 0.75);
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar-thumb {
        background: #000000; 
        border-radius: 10px;
    }
    &::-webkit-scrollbar {
        background: transparent;
        border-radius: 10px;
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

export const DivFilas = styled.div`
    width:100%;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #fff;
`;

export const Borrar = styled.button`
    width: 70px;
    height: 70px;
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

export const Editar = styled.button`
    border: none;
    width: 80px;
    height: 45px;
    background-color: black;
    color: white;
    border-radius:20px;
    cursor: pointer;
`;