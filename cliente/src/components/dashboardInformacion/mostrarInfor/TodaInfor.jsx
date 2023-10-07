import React, {useState, useEffect} from "react";
import Axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { Container, Contendiv, DivFilas, InforTodo, SubContainer, Borrar, Editar } from "./TodaStyle";
import dedo from "../../Img/aqui1.jpg"
import dedo2 from "../../Img/aqui2.jpg"

const ActualizaInfor = () => {
  const Navegate = useNavigate()
  const [informacion, setInformacion] = useState([]);
  const {token} = useAuthContext()

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/informacion`,{
      headers: {
        Authorization: token
    } 
    })
      .then((response) => {
        setInformacion(response.data);
      })
      .catch(error => {
      });
  }, []);

  const eliminarProducto = (id_plato) => {
    Axios.delete(`${process.env.REACT_APP_PRIMERO_UNO}/api/eliminaInfor/${id_plato}`)
        .then((response) => {
          window.location.reload()
        ;
        })
        .catch(error => {
        console.error("Error al eliminar el producto:", error);
    });
  }

const enviar = () => {
  Navegate("/private/crearInfor")
}

  return (
    <Container>
      <SubContainer>
        <div style={{display:"flex"}}>
          <h1 style={{color:"#000"}}>Toda la Informacion</h1>
          <div onClick={enviar} style={{display:"flex", alignItems:"center", justifyContent:"center", marginLeft:"4em", cursor:"pointer"}}>
            <img src={dedo} style={{height:"4em", borderRadius:"1em 0 0 1em"}}/>
            <button style={{height:"4.8em", backgroundColor:"rgb(51,51,51)", color:"white", border:"none", cursor:"pointer"}}>Crear Informacion</button>
            <img src={dedo2} style={{height:"4em", borderRadius:" 0 1em 1em 0 "}}/>
          </div>
        </div>
        <InforTodo>
          <div style={{position: "relative", top:"9%"}}>
            <div style={{display:"flex", justifyContent:"space-evenly", margin:"0", color:"#ffff"}}>
              <h1>Titulo</h1>
              <h1>Imagen</h1>
              <h1>Editar</h1>
              <h1>Borrar</h1>
            </div>
            {informacion.map((infor, index) => (
              <Contendiv key={index}>
                <DivFilas>
                <h2>{infor.Titulo}</h2>
                <div style={{
                  backgroundImage: `url(${process.env.REACT_APP_PRIMERO_UNO}/${infor.imagen})`, 
                  width:"200px", height:"200px",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  }}></div>
                  <Link to={`/private/actualizate/${infor.id_informacion}`}>
                    <Editar>editar</Editar>
                  </Link>
                  <Borrar onClick={() => eliminarProducto(infor.id_informacion)} />
                </DivFilas>
              </Contendiv>
            ))}
          </div>
        </InforTodo>        
      </SubContainer>
    </Container>
  )
}

export default ActualizaInfor