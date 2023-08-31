import styled from "styled-components"
import Fondo2 from "../Img/FondoMenu.jpg"
import Tabla from "../Img/letrero.jpg"

import { keyframes } from 'styled-components';

const sinkAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(2px);
    }
    100% {
        transform: translateY(0);
    }
`;

export const Container = styled.div`
    height: 100%;                                                               
    background-image: url(${Fondo2});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-wrap: wrap;
    align-items: center; 
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
        /* flex-direction: column; */
        height: 8rem;
        width: 19.7rem;
        margin-right: 3rem;
    }
`;

export const Box2 = styled.div`
    height: 15rem;
    width: 115.5rem;
    display: flex;
    cursor: pointer;
    align-items: center;
    font-size: 20px;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar-thumb {
    background: #000000; /* Color del pulgar */
    border-radius: 10px;
    }
    &::-webkit-scrollbar {
        background: transparent;
        /* border: 1px solid black;  */
        border-radius: 10px;
    }
    @media screen and (max-width: 115rem){
        /* flex-direction: column; */
        width: 114rem;
    }
    @media screen and (max-width: 114rem){
        /* flex-direction: column; */
        width: 113rem;
    }
    @media screen and (max-width: 113rem){
        /* flex-direction: column; */
        width: 109rem;
    }
    @media screen and (max-width: 112rem){
        /* flex-direction: column; */
        width: 107rem;
    }
    @media screen and (max-width: 111rem){
        /* flex-direction: column; */
        width: 105rem;
    }
    @media screen and (max-width: 110rem){
        /* flex-direction: column; */
        width: 103rem;
    }
    @media screen and (max-width: 109rem){
        /* flex-direction: column; */
        width: 101rem;
    }
    @media screen and (max-width: 108rem){
        /* flex-direction: column; */
        width: 99rem;
    }
    @media screen and (max-width: 107rem){
        /* flex-direction: column; */
        width: 97rem;
    }
    @media screen and (max-width: 106rem){
        /* flex-direction: column; */
        width: 95rem;
    }
    @media screen and (max-width: 105rem){
        /* flex-direction: column; */
        width: 93rem;
    }
    @media screen and (max-width: 104rem){
        /* flex-direction: column; */
        width: 91rem;
    }
    @media screen and (max-width: 103rem){
        /* flex-direction: column; */
        width: 89rem;
    }
    @media screen and (max-width: 102rem){
        /* flex-direction: column; */
        width: 87rem;
    }
    @media screen and (max-width: 101rem){
        /* flex-direction: column; */
        width: 85rem;
    }
    @media screen and (max-width: 100rem){
        /* flex-direction: column; */
        width: 83rem;
    }
    @media screen and (max-width: 99rem){
        /* flex-direction: column; */
        width: 81rem;
    }
    @media screen and (max-width: 98rem){
        /* flex-direction: column; */
        width: 79rem;
    }
    @media screen and (max-width: 97rem){
        /* flex-direction: column; */
        width: 75rem;
    }
    @media screen and (max-width: 96rem){
        /* flex-direction: column; */
        width: 73rem;
    }
    @media screen and (max-width: 95rem){
        /* flex-direction: column; */
        width: 71rem;
    }
    @media screen and (max-width: 94rem){
        /* flex-direction: column; */
        width: 69rem;
    }
    @media screen and (max-width: 93rem){
        /* flex-direction: column; */
        width: 67rem;
    }
    @media screen and (max-width: 92rem){
        /* flex-direction: column; */
        width: 65rem;
    }
    @media screen and (max-width: 91rem){
        /* flex-direction: column; */
        width: 63rem;
    }
    @media screen and (max-width: 90rem){
        /* flex-direction: column; */
        width: 61rem;
    }
    @media screen and (max-width: 88rem){
        /* flex-direction: column; */
        width: 59rem;
    }
    @media screen and (max-width: 87rem){
        /* flex-direction: column; */
        width: 55rem;
    }
    @media screen and (max-width: 85rem){
        /* flex-direction: column; */
        width: 51rem;
    }
    @media screen and (max-width: 81rem){
        /* flex-direction: column; */
        width: 49rem;
    }
    @media screen and (max-width: 79rem){
        /* flex-direction: column; */
        width: 48rem;
    }
    @media screen and (max-width: 77rem){
        /* flex-direction: column; */
        width: 46rem;
    }
    @media screen and (max-width: 76rem){
        /* flex-direction: column; */
        width: 44rem;
    }
    @media screen and (max-width: 75rem){
        /* flex-direction: column; */
        width: 41rem;
    }
    @media screen and (max-width: 73rem){
        /* flex-direction: column; */
        width: 38rem;
    }  
    @media screen and (max-width: 70rem){
        /* flex-direction: column; */
        width: 35rem;
    }  
    @media screen and (max-width: 68rem){
        /* flex-direction: column; */
        width: 32rem;
    }  
    @media screen and (max-width: 65rem){
        /* flex-direction: column; */
        width: 29rem;
    }  
    @media screen and (max-width: 62rem){
        /* flex-direction: column; */
        width: 25rem;
    }  
    @media screen and (max-width: 59rem){
        /* flex-direction: column; */
        width: 22rem;
    }  
`;

export const Box3 = styled.div`
    height: 15rem;
    width: 115.5rem;
    display: flex;
    cursor: pointer;
    align-items: center;
    font-size: 20px;
    margin-bottom: 2rem;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar-thumb {
    background: #000000; /* Color del pulgar */
    border-radius: 10px;
    }
    &::-webkit-scrollbar {
        background: transparent;
        /* border: 1px solid black;  */
        border-radius: 10px;
    }
    @media screen and (max-width: 115rem){
        /* flex-direction: column; */
        width: 114rem;
    }
    @media screen and (max-width: 114rem){
        /* flex-direction: column; */
        width: 113rem;
    }
    @media screen and (max-width: 113rem){
        /* flex-direction: column; */
        width: 109rem;
    }
    @media screen and (max-width: 112rem){
        /* flex-direction: column; */
        width: 107rem;
    }
    @media screen and (max-width: 111rem){
        /* flex-direction: column; */
        width: 105rem;
    }
    @media screen and (max-width: 110rem){
        /* flex-direction: column; */
        width: 103rem;
    }
    @media screen and (max-width: 109rem){
        /* flex-direction: column; */
        width: 101rem;
    }
    @media screen and (max-width: 108rem){
        /* flex-direction: column; */
        width: 99rem;
    }
    @media screen and (max-width: 107rem){
        /* flex-direction: column; */
        width: 97rem;
    }
    @media screen and (max-width: 106rem){
        /* flex-direction: column; */
        width: 95rem;
    }
    @media screen and (max-width: 105rem){
        /* flex-direction: column; */
        width: 93rem;
    }
    @media screen and (max-width: 104rem){
        /* flex-direction: column; */
        width: 91rem;
    }
    @media screen and (max-width: 103rem){
        /* flex-direction: column; */
        width: 89rem;
    }
    @media screen and (max-width: 102rem){
        /* flex-direction: column; */
        width: 87rem;
    }
    @media screen and (max-width: 101rem){
        /* flex-direction: column; */
        width: 85rem;
    }
    @media screen and (max-width: 100rem){
        /* flex-direction: column; */
        width: 83rem;
    }
    @media screen and (max-width: 99rem){
        /* flex-direction: column; */
        width: 81rem;
    }
    @media screen and (max-width: 98rem){
        /* flex-direction: column; */
        width: 79rem;
    }
    @media screen and (max-width: 97rem){
        /* flex-direction: column; */
        width: 75rem;
    }
    @media screen and (max-width: 96rem){
        /* flex-direction: column; */
        width: 73rem;
    }
    @media screen and (max-width: 95rem){
        /* flex-direction: column; */
        width: 71rem;
    }
    @media screen and (max-width: 94rem){
        /* flex-direction: column; */
        width: 69rem;
    }
    @media screen and (max-width: 93rem){
        /* flex-direction: column; */
        width: 67rem;
    }
    @media screen and (max-width: 92rem){
        /* flex-direction: column; */
        width: 65rem;
    }
    @media screen and (max-width: 91rem){
        /* flex-direction: column; */
        width: 63rem;
    }
    @media screen and (max-width: 90rem){
        /* flex-direction: column; */
        width: 61rem;
    }
    @media screen and (max-width: 88rem){
        /* flex-direction: column; */
        width: 59rem;
    }
    @media screen and (max-width: 87rem){
        /* flex-direction: column; */
        width: 55rem;
    }
    @media screen and (max-width: 85rem){
        /* flex-direction: column; */
        width: 51rem;
    }
    @media screen and (max-width: 81rem){
        /* flex-direction: column; */
        width: 49rem;
    }
    @media screen and (max-width: 79rem){
        /* flex-direction: column; */
        width: 48rem;
    }
    @media screen and (max-width: 77rem){
        /* flex-direction: column; */
        width: 46rem;
    }
    @media screen and (max-width: 76rem){
        /* flex-direction: column; */
        width: 44rem;
    }
    @media screen and (max-width: 75rem){
        /* flex-direction: column; */
        width: 41rem;
    }
    @media screen and (max-width: 73rem){
        /* flex-direction: column; */
        width: 38rem;
    }  
    @media screen and (max-width: 70rem){
        /* flex-direction: column; */
        width: 35rem;
    }  
    @media screen and (max-width: 68rem){
        /* flex-direction: column; */
        width: 32rem;
    }  
    @media screen and (max-width: 65rem){
        /* flex-direction: column; */
        width: 29rem;
    }  
    @media screen and (max-width: 62rem){
        /* flex-direction: column; */
        width: 25rem;
    }  
    @media screen and (max-width: 59rem){
        /* flex-direction: column; */
        width: 22rem;
    }  
`;

export const Box4 = styled.div`
    height: 15rem;
    width: 117.1rem;
    display: flex;
    justify-content: space-evenly;                            
    flex-wrap: wrap;
    background-color: #006eff;
    align-items: center;
    font-size: 20px;
    margin-bottom: 2rem;
`;

export const Container2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Container3 = styled.div`
    width: 100%;
    height: 20.5rem;                                                 
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 100rem) {
        flex-direction: column;
    }
`;

export const Minibox1 = styled.button`
    width: 36rem;
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    justify-content: space-evenly;
    color: white;
    background: none;
    animation: ${sinkAnimation} 0.3s ease-in-out ;
    &:active {
    animation: none; 
    transform: translateX(2px);
    }
    border: none;
    margin-left: 50px;
`;

export const Minibox2 = styled.div`
    width: 80rem;
    height: 10rem;                         
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 112rem){
        /* flex-direction: column; */
        width: 70rem;
    }
    @media screen and (max-width: 70rem){
        /* flex-direction: column; */
        width: 60rem;
    }
    @media screen and (max-width: 50rem){
        /* flex-direction: column; */
        width: 50rem;
    }
    @media screen and (max-width: 40rem){
        /* flex-direction: column; */
        width: 40rem;
    }
    @media screen and (max-width: 30rem){
        /* flex-direction: column; */
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
