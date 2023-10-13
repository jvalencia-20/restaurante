import React, {useState, useEffect} from "react";
import Axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { Container, Contendiv, DivFilas, InforTodo, SubContainer, Borrar, Editar, ContentImg } from "./TodaStyle";


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
          <h1 style={{color:"#000", fontSize:"40px"}}>Toda la Informacion</h1>
          <div onClick={enviar} style={{display:"flex", alignItems:"center", justifyContent:"center", marginLeft:"4em", cursor:"pointer"}}>
            <button style={{height:"3em", backgroundColor:"var(--color-azul)", color:"white", border:"none",cursor:"pointer", borderRadius:"5px", width:"150px", fontSize:"18px"}}>Crear Informacion</button>
          </div>
        </div>
        <div style={{display:"flex", justifyContent:"space-evenly", margin:"0", color:"#ffff", backgroundColor:"var(--color-negro)", width:"80%"}}>
          <h2>Titulo</h2>
          <h2>Imagen</h2>
          <h2>Acciones</h2>
        </div>        
        <InforTodo>
          <div style={{position: "relative", top:"9%"}}>
            {informacion.map((infor, index) => (
              <Contendiv key={index}>
                <DivFilas>
                  <h2>{infor.Titulo}</h2>
                  <ContentImg style={{
                    backgroundImage: `url(${process.env.REACT_APP_PRIMERO_UNO}/${infor.imagen})`}}> 
                  </ContentImg>
                  <div style={{display:"flex", justifyContent:"space-evenly", width:"300px"}}>
                    <Link to={`/private/actualizate/${infor.id_informacion}`}>
                      <Editar>Editar</Editar>
                    </Link>
                    <Borrar onClick={() => eliminarProducto(infor.id_informacion)}>Eliminar</Borrar>
                  </div>
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