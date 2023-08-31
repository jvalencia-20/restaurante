import styled from "styled-components";

export const Container4 = styled.div`
    width: 100%;
    height: 20rem;
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-width: 30rem){
        /* flex-direction: column; */
        width: 20rem;
        margin-top: 4em;
        flex-direction: column;
        justify-content: center;
        height: 12rem;
    }
`;

export const Minibox3 = styled.div`
    width: 30rem;
    height: 12rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: space-evenly;
    @media screen and (max-width: 30rem){
        /* flex-direction: column; */
        width: 22rem;
        margin-top: 1em;
        flex-direction: column;
        height: 12rem;
    }
`;

export const Minibox4 = styled.div`
    /* background-color: aqua; */
    width: 6rem;
    height: 5rem;
    @media screen and (max-width: 30rem){
        /* flex-direction: column; */
        margin-top: 2rem;
    }
`;