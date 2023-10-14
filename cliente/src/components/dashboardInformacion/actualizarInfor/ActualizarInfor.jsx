import React, {useState, useEffect} from "react";
import Axios  from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { ConInfor, Container, ContentImg, DivPrincipal, Hoja1, Hoja2, Infor, Pagina, ImgPlato, Entrar } from "./actualizarStyle";

const ActualizarInformacion = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [titulo, setTitulo] = useState("")
  const [informacion, setInformacion] = useState("")
  const [imgEnv, setImgEnv] = useState("")

  const navigate = useNavigate()
  const { token } = useAuthContext();
  const { id } = useParams();
  const ubicacion = `${process.env.REACT_APP_PRIMERO_UNO}/`
  const BuscarInfor = async () => {
      await Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/selectInformacion/${id}`,{
          headers: {
          Authorization: token
      } 
  })
      .then((response) => {
          
          setTitulo(response.data.Titulo)
          setInformacion(response.data.Informacion)
          setSelectedImage(ubicacion+response.data.imagen)
      })
      .catch(error =>{
      })
  }
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        setSelectedImage(URL.createObjectURL(file));
        setImgEnv(file);
    }
};


  const actualiza = (e) => {
    e.preventDefault()
    
    const datos = {
        titulo,
        informacion,
    }
    
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: token
        }
        };
        Axios.put(`${process.env.REACT_APP_PRIMERO_UNO}/api/inforActualizada/${id}`, {
            titulo: titulo,
            informacion: informacion,
        },{
            headers: {
            Authorization: token
        }  
        })
        .then(({ data }) => {
        navigate("/private/informate")
        })
        .catch(error => {
            if (error.response) {
                if (error.response.status === 409) {
                const errorMessage = error.response.data;
                switch (errorMessage) {
                    case 'titulo requerido.':
                break;
                case 'descripcion requerida.':
                break;
                case 'Precio Requerido.':
                break;
                case 'Imagen Requerida':
                break;
                default:
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
    useEffect(()=>{
      BuscarInfor()
    },[])
  
  

  return (
    <Pagina>
      <Container>
        <h1 style={{color:"#000"}}>Actualizar Informacion</h1>
        <DivPrincipal>
          <Hoja1>
            <div>
              <div>Titulo de la informacion</div>
              <Infor
                type="text"
                name="Titulo"
                placeholder="Titulo"
                autoComplete="off"
                value={titulo}
                onChange={ev => setTitulo(ev.target.value)}>
              </Infor>
            </div>
            <div>
              <div>Informacion relevantes</div>
              <Infor
                type="text"
                name="informacion"
                placeholder="informacion"
                autoComplete="off"
                rows="10" 
                cols="40"
                value={informacion}
                onChange={ev => setInformacion(ev.target.value)}
                style={{  height: "80px", borderRadius: "8px" }}>
              </Infor>
            </div>
          </Hoja1>
          <Hoja2>
            <ConInfor>
              <div style={{ height:"100px", width:"100%", display:"flex", justifyContent: "center"}}></div>
              <span style={{margin: "none", fontSize:"20px"}}>Imagen Actual</span>
              <ContentImg>
                {selectedImage && <ImgPlato src={selectedImage} alt="Seleccionada" />}
              </ContentImg>
              <div style={{display:"flex", justifyContent:"space-evenly", width:"300px"}}>
              <Link to={`/private/actualizarImgInfor/${id}`}>
                <button style={{height:"3em", backgroundColor:"var(--color-azul)", color:"white", border:"none",cursor:"pointer", borderRadius:"5px", width:"150px", fontSize:"18px"}}>Cambiar Imagen</button>
              </Link>
                <Entrar onClick={actualiza}> Guardar</Entrar>
              </div>
            </ConInfor>
          </Hoja2>
        </DivPrincipal>
      </Container>
    </Pagina>
  )
}

export default ActualizarInformacion