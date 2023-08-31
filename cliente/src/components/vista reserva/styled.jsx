import styled from "styled-components";
import piso from "../Img/piso.jpeg"


export const Container = styled.div`
    height: 97vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column; 
    background-image: url(${piso});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Salir = styled.div`
    background-image: url(${piso});
    background-size: cover;
    background-repeat: no-repeat;
    height: 3em;
    width: 119em;
    display: flex;
    justify-content:end;
`;

export const Salir2 = styled.button`
    background-color: transparent;
    text-align: center;
    font-size: 25px;
    /* margin-bottom: 50em; */
    /* border: none; */
    height: 3em;
    width: 3em;
`;

export const Box = styled.button`
    width: 20rem;
    height: 20rem;
    margin: 5px; 
    background: none;
    backdrop-filter: blur(2px); 
    background-color: rgba(15, 15, 15, 0.2); 
    box-shadow: -10px 15px 15px 0px;
    border-radius: 15px;
`;

export const Box2 = styled.div`
    width: 15rem;
    height: 3rem;
    margin: 5px; 
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 25px;
    font-weight: bold;
`;