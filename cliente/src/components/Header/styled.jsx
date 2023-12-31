import styled from "styled-components";
import Tabla from "../Img/letrero.jpg"

export const Container3 = styled.div`
    /* background-color: aqua; */
    width: 100%;
    height: 20rem;                                                 
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 100rem) {
        flex-direction: column;
    }
    
`;

export const Minibox2 = styled.div`
    width: 80rem;
    height: 10rem;                         
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 112rem){
        width: 70rem;
    }
    @media screen and (max-width: 70rem){
        width: 60rem;
    }
    @media screen and (max-width: 50rem){
        width: 50rem;
    }
    @media screen and (max-width: 40rem){
        width: 40rem;
    }
    @media screen and (max-width: 30rem){
        width: 23rem;
        margin-top: 1em;
        flex-direction: column;
        height: 12rem;
    }
`;

export const Button = styled.button`
    width: 10rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &:active {
        animation: none; 
    transform: translateX(2px);
    }
    background: none;
    border: none;
    color: white;
    text-shadow: 5px 5px 5px  black;
    -webkit-text-stroke: 1.5px black;
    font-weight: bold;
    font-size: 20px;
    @media screen and (max-width: 50rem){
        margin-top: 1rem;
    }
`;

export const Box1 = styled.div`
    height: 12rem;
    width: 30rem;
    font-size: 40px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    background-image: url(${Tabla});
    background-size: cover;
    background-position: center;
    box-shadow: -15px 15px 10px;
    transform: rotate(-4deg);
    margin-left: 50px;
    font-family: 'Courgette', cursive;
    @media screen and (max-width: 30rem){
    height: 8rem;
    width: 19.7rem;
    margin-right: 3rem;
}
`;

export const Notificacion = styled.h4`
    background-color: red;
    border-radius: 2em;
    width: 25px;
    height: 25px;
    margin-bottom: 80px;
`;
