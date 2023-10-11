import styled from "styled-components";
import pizzara from "../Img/pizarra.jpeg"

export const Background = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    flex-direction: column;
`;

export const ContPrincipal = styled.div`
    background-image: url(${pizzara});
    border: solid 1px;
    width: 65%;
    height: 71%;
    background-color: rgba(05, 05, 05, .5);  
    backdrop-filter: blur(5px);
    box-shadow: 13px 10px 5px 0px rgba(0, 0, 0, 0.26);
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
`;

export const Boton = styled.button`
    border-radius: 20px;
    background-color: black;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: #1f52e0;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
`;

export const Thead = styled.thead`
    background-color: #000;
`;

export const Tbody = styled.div`
    height: 536px;
    overflow-y: scroll;
    &::-webkit-scrollbar-thumb {
        background: #000000; 
    }
    &::-webkit-scrollbar {
        background: transparent;
        border-radius: 10px;
    }
`;

export const Tr1 = styled.tr`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

export const Tr2 = styled.tr`
    display: grid;
    grid-template-columns: repeat(5, 2fr);
`;

export const Th = styled.th`
    padding: 15px;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #000000;
    color: white;
    margin: 0;
    margin-right: 38px;
    font-size: 20px;
`;

export const Td = styled.td`
    padding: 10px;
    margin: 0;
    color: white;
    font-size: 18px;
    z-index: 0;
    margin-right: 18px;
    font-size: 20px;
`;

export const TdMesa = styled(Td)`
    font-weight: bold;
    text-align: center;
    margin: 0;
    padding: 10px;
`;