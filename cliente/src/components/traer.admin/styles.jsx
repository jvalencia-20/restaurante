import styled from "styled-components";

export const Contenedor = styled.div`
    width: 100%;
    height: 100%;
    display : flex;
    @media (max-width: 480px){
        height: 100em;   
}
`;

export const Main = styled.main`
    width: 98%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Tabla = styled.table`
    height: 70%;
    width: 90%;
    border-collapse: collapse;
`;

export const Thead = styled.thead`
    background-color: rgb(128, 126, 126);
    color: #000;
    height: 40px;
`;

export const Tr = styled.tr`
`;

export const Th = styled.th`
    padding: 5px 10px;
    font-size: 20px;
`;

export const Tbody = styled.tbody`
    background-color: white;
`;

export const Td = styled.td`
    padding: 5px 10px;
    text-align: start;
    font-size: 22px;
    border: 1px solid black;
`;

export const Borrar = styled.button`
    background-color: #000000;
    border: 1px solid black;
    margin: 1px;
    width: 75px;  
    color: white;
    cursor: pointer;
    border-radius: 5px; 
`;

export const Editar = styled.button`
    background-color: white;
    border: 1px groove black;
    width: 70px;
    color: black;
    cursor: pointer;
    margin: 1px;
    border-radius: 5px;
`;

