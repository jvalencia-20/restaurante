import styled from "styled-components";
import pizarra from "../Img/pizarra.jpeg"

export const Contenedor = styled.div`
    background-color: #f3f3f3;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90em;
    height: 70em;
`;

export const Form = styled.form`
    width: 24em;
    height: 35rem;
    padding: 20px;
    background-image: url(${pizarra});
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin: 20px;
`;

export const Button = styled.button`
    width: 10em;
    padding: 15px;
    font-size: 18px;
    background-color: #131415;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #0f0f10;
    }
`;

export const Label = styled.label`
    font-weight: bold;
    margin-bottom: 10px;
    display: block;
`;

export const Input = styled.input`
    width: 23em;
    font-size: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: white;
    background-color: transparent;
    margin-bottom: 10px;
    &:focus {
        outline: none;
    }
`;

export const Textarea = styled.textarea`
    width: 23em;
    padding: 10px;
    font-size: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: white;
    background-color: transparent;
    margin-bottom: 10px;
    resize: vertical;
    &:focus {
        outline: none;
    }
`;

export const Cajatabla = styled.div`
    display: flex;
    justify-content: center;
    overflow-y: scroll;
    width: 59em;
    height: 650px;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #000000;
        border-radius: 5px;
    }
`;

export const Table = styled.table`
    width: 60em;
    color: #333;
    border-collapse: collapse;
`;

export const Tr = styled.tr`
    &:hover {
        background-color: #f5f5f5;
    }
`;

export const Th = styled.th`
    text-align: center;
    background-color: #e7840b;
    height: 2em;
    text-shadow: 1px 1px 1px black;
    border: 1px solid black;
    font-size: 25px;
`;

export const Td = styled.td`
    border: 1px groove black;
    color: black;
    padding: 3px;  
    font-size: 25px;
`;

export const Actualizar = styled.button`
    background-color: #040505;
    color: white;
    border-radius: 5px;
    border: none;
    width: 6em;
    height: 2em;
    margin: 1px;
    cursor: pointer;
`;

export const Cancelar = styled.button`
    background-color: #030202;
    color: white;
    border-radius: 5px;
    border: none;
    width: 6em;
    height: 2em;
    margin: 1px;
    cursor: pointer;
`;

export const Editar = styled.button`
    background-color: #080909;
    color: white;
    border-radius: 5px;
    border: none;
    width: 6em;
    height: 2em;
    margin: 1px;
    cursor: pointer;
`;

export const Eliminar = styled.button`
    background-color: #030303;
    color: white;
    border-radius: 5px;
    border: none;
    width: 6em;
    height: 2em;
    margin: 1px;
    cursor: pointer;
`;