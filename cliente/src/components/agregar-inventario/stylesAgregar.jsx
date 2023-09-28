import styled from "styled-components"

export const Background = styled.div`
  background-size: cover;
  height: 80%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Login = styled.form`
  background-color: black;  
  backdrop-filter: blur(5px);
  height: 95%;
  width: 90%;
  border-radius: 1em;
  box-shadow: 10px 10px 10px  black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ConTitulo = styled.div`
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Titulo = styled.h1`
  font-family: 'Katibeh', cursive;  
  color: #f1f1f1;
  font-size: 2em;
  padding: 2px;
  margin-bottom: 10rem;
  font-weight: bold;
  margin-bottom: 5rem;
`;

export const Logotipo = styled.img`
  background-color: #0b5aeec5;
  height: 30em;
  width: 40em;
  box-shadow: 2px 1px 10px black;
  border-radius: 2em;
  margin-right: 5em;
`;

export const ConInfor = styled.div`
  width: 90%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.h3`
  color: #ffff;
`;

export const Infor = styled.input`
  width: 50%;
  border: 1px solid #ffff;
  background-color: transparent;
  border-radius: 5px;
  color: #ffffff;
  font-size: 1.2em;
`;

export const Entrar = styled.button`
  margin-top: 2em;
  color: #ffff;
  height: 2em;
  width: 6em;
  border: 1px solid #ffff;
  border-radius: 1em;
  background-color: transparent;
  font-size: 1em;
`;

export const ReContraseña = styled.h4`
  color: #ffff;
`;