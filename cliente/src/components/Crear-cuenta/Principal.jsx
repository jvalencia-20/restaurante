import { useState } from "react";
import Axios from "axios"
import { Background, ConInfor, ConTitulo, Entrar, Infor, Login, Name, Titulo } from "./Styled";
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext";

const Crearcuenta = () => {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState("")
  const [correo, setCorreo] = useState("")
  const [cargo, setCargo] = useState(null)
  const [contraseña, setContaseña] = useState("")
  const [confirmarContraseña, setconfirmarContraseña] = useState("")
  const { token } = useAuthContext();
  const [mensajito, setMensajito] = useState("") 
  const [advertencia,setAdvertencia] = useState("")

  const cargos = ["admin", "empleado"]
  const handleCargoSeleccionada = (event) => {
    const cargoSelect = event.target.value;
    setCargo(cargoSelect);
};

  const agregarusuario = (e) => {
    e.preventDefault()
    const caracteresSospechosos = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(usuario);    
    if (caracteresSospechosos) {
      setAdvertencia('Los campos contienen caracteres sospechosos.');
      return;
    }
    const caracteresSospechosos2 = /[!#$%^&*()_+{}\[\]:;<>,?~\\]/.test(correo);    
    if (caracteresSospechosos2) {
      setAdvertencia('Los campos contienen caracteres sospechosos.');
      return;
    }
    Axios.post(`${process.env.REACT_APP_PRIMERO_UNO}/api/createadmin`, {
      nombre: usuario,
      correo: correo,
      cargo: cargo,
      password: contraseña,
      confirmar_password: confirmarContraseña
    }, {
      headers: {
        Authorization: token
      }
    })
      .then(({ data }) => {
        alert("usuario registrado")
        navigate("/private/traerAdmin");
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 409) {
            const errorMessage = error.response.data;
            switch (errorMessage) {
              case 'contraseña requerida.':
                setMensajito("Contraseña requerida.");
                break;
              case 'Nombre de usuario requerido.':
                setMensajito("Nombre de usuario requerido.");
                break;
              case 'Correo requerido.':
                setMensajito("Correo requerido.");
                break;
              case 'escriba un cargo valido':
                setMensajito("escriba un cargo valido")
                break;
              case 'Nombre de usuario o correo ya existente.':
                setMensajito("Nombre de usuario o correo ya existente.");
                break;
                case 'Las contraseñas deben coincidir.':
                  setMensajito("Verifique que las contraseñas sean iguales.");
                  break;
              default:
                setMensajito("Error en el registro.");
                break;
              }
              } else {
                setMensajito("Ocurrió un error en el registro.");
              }
              } else {
                setMensajito("Ocurrió un error en la solicitud.");
              }
      });
      
    }


  return (
    <>
      <Background>
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
              onChange={ev => setUsuario(ev.target.value)}>
            </Infor>
            <Name>Correo</Name>
            <Infor
              type="email"
              name="correo"
              placeholder="Correo"
              autoComplete="off"
              value={correo}
              onChange={ev => setCorreo(ev.target.value)}>
            </Infor>
            <Name>Cargo</Name>
            <select style={{backgroundColor:"#00000015",color:"rgb(255, 255, 255)",borderRadius:"5px",width:"22rem",height:"5rem",fontSize:"18px", border:"1px solid #ffff"}}
              onChange={handleCargoSeleccionada}>
              <option value="" style={{backgroundColor:"#000", color:"rgb(255, 255, 255)"}}>Selecciona el cargo</option>
              {cargos.map((cargo, index)=>(
                <option key={index} value={cargo} style={{backgroundColor:"#000", color:"#ffff"}}>
                    {cargo}
                </option>
              ))}
            </select>
            <Name>Contraseña</Name>
            <Infor
              type="password"
              name="contraseña"
              placeholder="Contraseña"
              autoComplete="off"
              value={contraseña}
              onChange={ev => setContaseña(ev.target.value)}>
            </Infor>
            <Name>Confirmar Contraseña</Name>
            <Infor
              type="password"
              name="confirmar_contraseña"
              placeholder="Confirmar Contraseña"
              autoComplete="off"
              value={confirmarContraseña}
              onChange={ev => setconfirmarContraseña(ev.target.value)}>
            </Infor>
            <Entrar onClick={agregarusuario}>Registrate</Entrar>
            <p style={{color:"white"}}>{mensajito}</p>
            <h4 style={{color: "white", margin:"none"}}>{advertencia}</h4>
          </ConInfor>
        </Login>
      </Background>
    </>
  );
}

export default Crearcuenta;