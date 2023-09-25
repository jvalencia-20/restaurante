import { useState } from "react";
import Axios from "axios";
import { Background, ConInfor, ConTitulo, Infor, Login, Name, Titulo, Logotipo, Div, Form, Fondo1 } from "./styled";
import logo from "../Img/Unido.png"
import { useNavigate } from "react-router-dom";
import {useAuthContext} from "../context/AuthContext"
import CryptoJS from 'crypto-js'

const Logini = () => {
  const [body,setBody] = useState({usuario:'',password:''})
  const navigate = useNavigate()
  const {login} = useAuthContext()
  const [password, setPassword] = useState("")
  const [usuario, setUsuario] = useState("")
  const [advertencia, setAdvertencia] = useState("")
  const {x} = useAuthContext()
  const verificar = (e) => {
    e.preventDefault()
    const caracteresSospechosos = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(usuario);    
    if (caracteresSospechosos) {
      setAdvertencia('Los campos contienen caracteres sospechosos.');
      return;
    }
    const hash = CryptoJS.AES.encrypt(password, x).toString();
    Axios.post("http://localhost:3002/api/login",{
      usuario: usuario,
      password: hash
    })
    .then(({data})=>{
      login(data)
    })
    .catch(error => {
      if (error.response) {
        if (error.response.status === 409) {
          const errorMessage = error.response.data;
          switch (errorMessage) {
            case 'Usuario requerido.':
              setAdvertencia('Usuario requerido.');
              break;
            case 'contraseña requerida.':
              setAdvertencia('contraseña requerida.');
              break;
            case "Las Contraseñas no Coinciden":
              setAdvertencia("Contraseña Incorrecta.");
              break;
            case "El usuario no existe":
                setAdvertencia("El usuario no existe");
              break;
            default:
              setAdvertencia("Error en el login.");
              break;
            }
            } else {
              setAdvertencia("Ocurrió un error en la Autenticación.");
            }
            } else {
            setAdvertencia("Ocurrió un error en la solicitud.");
      }
    });
  }     
  return (
    <>
      <Background>
        <Fondo1 >
          <Logotipo src={logo}></Logotipo>
          <Login>
            <ConTitulo>
              <Titulo style={{filter: "drop-shadow(-15px 15px 10px black)"}}>Donde entras por una Bandeja y sales con una Paisa</Titulo>
            </ConTitulo>
            <Form>
            <ConInfor>
              <Name style={{filter: "drop-shadow(-15px 15px 10px black)"}}>Usuario</Name>
              <Infor
                type="text"
                name="usuario"
                placeholder="Usuario"
                autoComplete="off"
                value={usuario}
                onChange={ev => setUsuario(ev.target.value)}>
              </Infor>
              <Name style={{filter: "drop-shadow(-15px 15px 10px black)"}}>Contraseña</Name>
              <Infor
                type="password"
                name="password"
                placeholder="Contraseña"
                autoComplete="off"
                value={password}
                onChange={ev => setPassword(ev.target.value)}>
              </Infor>
            </ConInfor>
            </Form>
            <Div>
              <a onClick={verificar} style={{fontWeight:"bold"}} href="#" className="btn-neon">
                <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
                <span id="span4"></span>
                INGRESAR
              </a>
            </Div>
              <h4 style={{color: "white", margin:"none"}}>{advertencia}</h4>
          </Login>
        </Fondo1>
      </Background>
    </>
  );
}

export default Logini;