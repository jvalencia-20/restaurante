import { useEffect, useState } from "react";
import Axios from "axios"
import { Background, ConInfor, ConTitulo, Entrar, Infor, Login, Logotipo, Name, ReContraseña, Titulo } from "./Styled";
import logo from "../Img/LOgo.png"
import {Link, useNavigate} from  "react-router-dom"
import { useAuthContext } from "../context/AuthContext";

const Crearcuenta = () => {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState("")
  const [correo, setCorreo] = useState("")
  const [contraseña, setContaseña] = useState("")
  const [confirmarContraseña, setconfirmarContraseña] = useState("")
  const [hola, setHola] = useState(false)
  const { token } = useAuthContext();
  

  const agregarusuario = (e) => {
    e.preventDefault()
    console.log(token, "token en crear usuario")
    Axios.post("http://localhost:3002/api/createcliente", {
      nombre_cliente: usuario,
      correo: correo,
      password: contraseña,
      confirmar_password:confirmarContraseña
  },{
    headers: {
      Authorization: token
  }  
  })
  .then(({data})=>{
      
      console.log(data,"estoy aqui")
      alert("usuario registrado")
      redireccionarALogin()
    })
    .catch(error => {
      if (error.response) {
        if (error.response.status === 409) {
          const errorMessage = error.response.data;
          switch (errorMessage) {
            case 'contraseña requerida.':
              console.log("Contraseña requerida.");
              break;
            case 'Nombre de usuario requerido.':
              console.log("Nombre de usuario requerido.");
              break;
            case 'Correo requerido.':
              console.log("Correo requerido.");
              break;
            case 'Nombre de usuario o correo ya existente.':
              console.log("Nombre de usuario o correo ya existente.");
              break;
              case 'Las contraseñas deben coincidir.':
                console.log("Verifique que las contraseñas sean iguales.");
                break;
          
            default:
              console.log("Error en el registro.");
              break;
          }
        } else {
          alert("Ocurrió un error en el registro.");
        }
      } else {
        alert("Ocurrió un error en la solicitud.");
      }
    });
  }


  
  // const control = () => {
  //   if(usuario.length > 0 && correo.length > 0 && contraseña.length > 0 && confirmarContraseña.length > 0 && contraseña === confirmarContraseña ){
  //     agregarusuario()
  //     // navigate("/login")
  //   }else{
  //     alert("Debe llenar todos los campos y verifique que la contraseña sea la misma")
  //   }
  // }

  const redireccionarALogin = () => {
    navigate("/login");
  };




  return (
    <>
      <Background>
      {/* <Logotipo src={logo}></Logotipo> */}
        <Login>
          <ConTitulo>
            <Titulo>Donde entras por una Bandeja y sales con una Paisa</Titulo>
          </ConTitulo>
          <ConInfor>
            <Name>Usuario</Name>
            <Infor
            type="text"
            name="usuario"
            placeholder="Usuario"
            autoComplete="off"
            value={usuario}
            onChange={ev => setUsuario(ev.target.value)}
            ></Infor>
            <Name>Correo</Name>
            <Infor
            type="email"
            name="correo"
            placeholder="Correo"
            autoComplete="off"
            value={correo}
            onChange={ev => setCorreo(ev.target.value)}
            ></Infor>
            <Name>Contraseña</Name>
            <Infor
            type="password"
            name="contraseña"
            placeholder="Contraseña"
            autoComplete="off"
            value={contraseña}
            onChange={ev => setContaseña(ev.target.value)}
            ></Infor>
            <Name>Confirmar Contraseña</Name>
            <Infor
            type="password"
            name="confirmar_contraseña"
            placeholder="Confirmar Contraseña"
            autoComplete="off"
            value={confirmarContraseña}
            onChange={ev => setconfirmarContraseña(ev.target.value)}
            ></Infor>
            <Entrar onClick={agregarusuario}>Registrate</Entrar>
            <Link style={{textDecoration:"none", color:"black"}} to="/login"><ReContraseña>Ya tengo cuenta</ReContraseña></Link>
          </ConInfor>
        </Login>
      </Background>
    </>
  );
}

export default Crearcuenta;