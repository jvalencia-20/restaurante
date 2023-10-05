import styled from "styled-components"

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
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center; 
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
        background: #000000; 
        border-radius: 10px;
    }
    &::-webkit-scrollbar {
        background: transparent;
        border-radius: 10px;
    }
    @media screen and (max-width: 1850px) {
        width: 1650px;
    }
    @media screen and (max-width: 1650px) {
        width: 1450px;
    }
    @media screen and (max-width: 1450px) {
        width: 1250px;
    }
    @media screen and (max-width: 1250px) {
        width: 1050px;
    }
    @media screen and (max-width: 1050px) {
        width: 850px;
    }
    @media screen and (max-width: 850px) {
        width: 650px;
    }
    @media screen and (max-width: 650px) {
        width: 450px;
    }
    @media screen and (max-width: 550px) {
        width: 350px;
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
        background: #000000;
        border-radius: 10px;
    }
    &::-webkit-scrollbar {
        background: transparent;
        border-radius: 10px;
    }
    @media screen and (max-width: 1850px) {
        width: 1650px;
    }
    @media screen and (max-width: 1650px) {
        width: 1450px;
    }
    @media screen and (max-width: 1450px) {
        width: 1250px;
    }
    @media screen and (max-width: 1250px) {
        width: 1050px;
    }
    @media screen and (max-width: 1050px) {
        width: 850px;
    }
    @media screen and (max-width: 850px) {
        width: 650px;
    }
    @media screen and (max-width: 650px) {
        width: 450px;
    }
    @media screen and (max-width: 550px) {
        width: 350px;
    } 
`;

export const Container2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    font-style: italic;
    animation: ${sinkAnimation} 0.3s ease-in-out ;
    &:active {
        animation: none; 
        transform: translateX(2px);
    }
    border: none;
    margin-left: 50px;
    &:hover {
        transform:scale(1.1);
        transition: all 0.5s ease;
    }
`;