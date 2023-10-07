import styled from "styled-components"

export const Background = styled.div`
    height: 74vh;
    width: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    flex-direction: column;
`;

export const ContPrincipal = styled.div`
    border: solid 1px;
    width: 40%;
    height: 85%;
    background-color: rgba(05, 05, 05, .5);  
    backdrop-filter: blur(10px);
    box-shadow: 13px 10px 5px 0px rgba(0, 0, 0, 0.26);
    border-radius: 20px;
    @media (min-width: 768px) {
        width: 50%;
    }
`;

export const ContFactura = styled.div`
    height: 22rem;
    margin-bottom: 20px;
    overflow-y: auto;
    border-bottom: dashed;
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        border-spacing: 0;
        @media (min-width: 768px) {
            margin-top: 20px;
        }
    }
    th, td {
        padding: 10px; 
        text-align: center;
        @media (min-width: 768px) {
            padding: 10px; 
        }
    }
    th {
        background-color: #f2f2f2;
    }
    tbody tr {
        margin-bottom: 10px;
        @media (min-width: 768px) {
            margin-bottom: 10px;
        }
    }
`;

export const ResPrecios = styled.div`
    padding: 20px;
    overflow-y: auto; 
    max-height: 30vh;
    font-size: 16px;
    @media (min-width: 768px) {
        max-height: initial;
        font-size: 20px;
    }
`;

export const ContBoton = styled.div`
    display: flex;
    justify-content: center;
`;

export const BotonImprimir = styled.button`
    color: #fffafa;
    background-color: black;
    border: solid 1px;
    border-radius: 20px;
    font-style: italic;
    cursor: pointer;
    font-size: 15px;
    &:hover{
        background-color: #1f52e0;
    }
`;

export const Select = styled.select`
    width: 20rem;
    height: 30px;
    color: white;
    background-color: black;
    border: solid 1px;
    font-style: italic;
    font-size: 15px;
    overflow-y: scroll;
        &::-webkit-scrollbar-thumb {
    background: transparent; 
    border-radius: 10px;
    }
    &::-webkit-scrollbar {
        background: transparent;
        border-radius: 10px;
    }
`;

export const Option = styled.option`
    width: 18rem;
    height: 5rem;
    font-size: 20x;
`;