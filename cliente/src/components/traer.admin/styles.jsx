import styled from "styled-components";
import { Boton } from "../vista-dashboard/styles-princDashboard";

export const Contenedor = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 480px){
    height: 100em;   
}
`;

export const Main = styled.main`
    @media (max-width: 480px){
    width: 98%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
`;

export const Tabla = styled.table`
    border-collapse: collapse;
    border-radius: 2px solid #c7ba45;
    border-right: 2px solid #c7ba45;
    border-left: 2px solid #c7ba45;
    border-bottom: 2px solid #c7ba45;
`;

export const Thead = styled.thead`
    background-color: #c7ba45;
    color: #000;
    height: 40px;
`;

export const Tr = styled.tr`
`;

export const Th = styled.th`
    padding: 5px 10px;
`;

export const Tbody = styled.tbody`
    background-color: white;
`;

export const Td = styled.td`
    padding: 5px 10px;
    text-align: start;
`;

export const Borrar = styled.button`
    background-color: #e61212;
    border: 1px solid black;
    margin: 1px;
    width: 75px;  
    color: white;
    cursor: pointer;
    border-radius: 5px; 
`;


export const Editar = styled.button`
background-color: #00c3ff;
border: 1px groove black;
width: 70px;
cursor: pointer;
margin: 1px;
border-radius: 5px;

`;