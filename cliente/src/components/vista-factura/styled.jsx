import styled from "styled-components";

export const Background = styled.div`
    margin: 0;
    padding: 0;
    background-color: #f7f1f1dd;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export const CuadroFact = styled.div` 
    border: solid 1px;
    background-color: white;
    width: 40%;
    height: 80%;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.199);
    @media (max-width: 768px) {
    width: 100%; 
    height: auto; 
    margin-right: 0; 
    }
`;

export const Descripcion = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
    display: none; 
    }
`;

export const ContFact = styled.div`
    /* border: solid 1px; */
    margin-top: 20px;
    height: 420px;
    overflow-y: auto;
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-thumb {
    background-color: #888; 
    border-radius: 5px; 
}
::-webkit-scrollbar-track {
    background-color: #f1f1f1; 
}
p {
    margin: 0;
    font-size: 14px;
}
div:not(:last-child) {
    margin-bottom: 30px;
}
div:last-child {
    margin-top: 20px;
    text-align: right;
}
@media (max-width: 768px) {
        height: auto;
        margin-bottom: 10px;
    }
`;

export const ContBoton = styled.div`
    height: auto;
    display: flex;
    align-items: end;
    justify-content: end;
`;

export const Text = styled.div`
    border-top: dashed;
    text-align: center;
    margin-bottom: 20px;
    @media (max-width: 768px) {
    margin-bottom: 10px; 
    }
    h2 {
    font-size: 18px; 
    }
`;

export const BotonImprimir = styled.button`
    color: #fffafa;
    background-color: black;
    border: solid 1px;
    border-radius: 20px;
    font-style: italic;
    cursor: pointer;
    &:hover{
    background-color: #1f52e0;
    }
`;

export const ImgeImp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const InfImp = styled.div`
    max-height: 10%;
`;

export const LogoImage = styled.img`
    max-width: 30%; 
    height: auto; 
`;