import { useState } from "react";
import Axios from "axios";
import { Background, ConInfor, ConTitulo, Entrar, Infor, Login, Name, Titulo, Logotipo } from "./styled";
import logo from "../Img/LOgo.png"
import { useNavigate } from "react-router-dom";
import {useAuthContext} from "../context/AuthContext"
import CryptoJS from 'crypto-js'

const Logini = () => {
  const [body,setBody] = useState({usuario:'',password:''})
  const navigate = useNavigate()
  const {login} = useAuthContext()
  const [password, setPassword] = useState("")
  const [usuario, setUsuario] = useState("")
  const {x} = useAuthContext()


  

  // const inputchange = ({target})=>{
  //   const {name,value} = target
  //   setBody({
  //     ...body,
  //     [name]: value
  //   })
  // }

  const verificar = (e) => {
    e.preventDefault()
    const hash = CryptoJS.AES.encrypt(password, x).toString();
    Axios.post("http://localhost:3002/api/login",{
      usuario: usuario,
      password: hash
    })

    .then(({data})=>{
      login(data)
      // navigate("/private")
    })
    .catch(({response})=>{
      alert("usuario o contraseña incorrectos")
    })
  }     
  return (
    <>
      <Background>
          <Logotipo src={logo}></Logotipo>
        <Login>
            <ConTitulo>
              <Titulo style={{filter: "drop-shadow(-15px 15px 10px black)"}}>Donde entras por una Bandeja y sales con una Paisa</Titulo>
            </ConTitulo>
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
              <Entrar onClick={verificar} style={{filter: "drop-shadow(-15px 15px 10px black)"}}>Entrar</Entrar>
          </ConInfor>
        </Login>
      </Background>
    </>
  );
}

export default Logini;