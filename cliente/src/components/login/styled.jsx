import styled from "styled-components"
import Fondo from "../Img/Restauran.jpg"

export const Background = styled.div`
  background-image: url(${Fondo});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
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

export const Fondo1 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and ( max-width: 90vh) {
    flex-direction: column;  
}
`;

export const Login = styled.form`
  background-color: rgba(05, 05, 05, .5);  
  backdrop-filter: blur(5px);
  height: 35em;
  width: 30em;
  border-radius: 2em;
  box-shadow: 10px 10px 10px  black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and ( max-width: 90vh){   
    height: 31em;
    width: 20em; 
  }
`;

export const ConTitulo = styled.div`
  height: 8em;
  display: flex;
  text-align: center;
`;

export const Titulo = styled.h1`
  height: 100px;
  font-family: 'Katibeh', cursive;
  color: #feffff;
  font-size: 1.5em;
  margin: none;
  @media screen and ( max-width: 90vh){   
    font-size: 1em;
  }
`;

export const Logotipo = styled.img`
  background-color: rgba(05, 05, 05, .5);  
  backdrop-filter: blur(5px);
  height: 35em;
  width: 40em;
  box-shadow: 2px 1px 10px black;
  border-radius: 2em;
  margin-right: 5em;
  @media screen and ( max-width: 95vh){   
    height: 10em;
    width: 20em;
    margin: 0;
  }
`;

export const ConInfor = styled.div`
  width: 30em;
  height: 30em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and ( max-width: 90vh){   
    height: 25em;
    width: 20em; 
  }
`;

export const Name = styled.h3`
  color: #ffffff;
  @media screen and ( max-width: 90vh){   
    font-size: 1em;
  }
`;

export const Infor = styled.input`
  width: 23em;
  height: 3em;
  border: 1px solid #ffffff;
  background-color: transparent;
  border-radius: 5px;
  color: #fffafa;
  @media screen and ( max-width: 90vh){   
    height: 2em;
    width: 20em; 
  }
`;

export const Entrar = styled.button`
  margin-top: 2em;
  color: #ffff;
  height: 2em;
  width: 5em;
  border: 1px solid #ffff;
  border-radius: 1em;
  background-color: transparent;
`;

export const ReContraseña = styled.h4`
  color: #ffff;
`;

export const Form = styled.div`
  backdrop-filter: blur(1000px);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 15em;
  width: 30em;
  display: flex;
  align-items: center;
  justify-content: end;
  @media screen and ( max-width: 90vh){   
    height: 14em;
    width: 20em; 
  }
`;

export const Div = styled.div`
  width: 13em;
  height: 6em;
  display: flex;
  justify-content: center;
  align-items: center;
`;