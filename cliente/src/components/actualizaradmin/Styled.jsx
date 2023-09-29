import styled from "styled-components"

export const Background = styled.div`
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and ( max-width: 90vh){   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Login = styled.form`
  background-color: rgb(5, 5, 5);  
  backdrop-filter: blur(5px);
  height: 30em;
  width: 30em;
  border-radius: 1em;
  box-shadow: 10px 10px 10px  black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and ( max-width: 90vh){
    width: 20em; 
  }
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
  font-size: 1.5em;
  padding: 2px;
  margin: 0;
  @media screen and ( max-width: 90vh){   
    font-size: 1.3em;
    padding: 7px;
  }
`;

export const ConInfor = styled.div`
  width: 30em;
  height: 15em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #838181;
  @media screen and ( max-width: 90vh){   
    height: 70%;
    width: 20em; 
  }
`;

export const Name = styled.h3`
  color: #ffff;
  @media screen and ( max-width: 90vh){   
    font-size: 0.8em;
  }
`;

export const Infor = styled.input`
  width: 23em;
  height: 2em;
  border: 1px solid #ffff;
  background-color: transparent;
  border-radius: 5px;
  color: #000000;
  @media screen and ( max-width: 90vh){   
    height: 2em;
    width: 20em; 
  }
`;

export const Entrar = styled.button`
  margin-top: 2em;
  color: #ffff;
  height: 2em;
  width: 8em;
  border: 1px solid #ffff;
  border-radius: 1em;
  background-color: transparent;
`;
