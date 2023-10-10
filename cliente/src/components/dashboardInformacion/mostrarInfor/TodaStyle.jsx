import styled from "styled-components";
import "../../../App.css"

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
    width: 80%;
    background-color: var(--color-negro);
    display: flex;
    flex-direction: column;
    border-radius: 0 0  8px 8px ;
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
`;

export const Borrar = styled.button`
    width: 130px;
    height: 3em;
    color: #ffff;
    background-color: var(--color-azul);
    border: none;
    border-radius: 5px;
    font-size:18px;
    cursor: pointer;
`;

export const Editar = styled.button`
    border: none;
    width: 130px;
    height: 3em;
    background-color: var(--color-azul);
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size:18px;
`;