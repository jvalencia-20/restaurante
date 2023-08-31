import { useState, useEffect } from "react";
import Axios from "axios"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Background, Platos, ConImg, Contenido, ImgPlato, Titulo, NomPlato, Aumentar, Botones, Agregar, Plato, Container, Adicional, Ingredientes, Logito, Infor, CajaImg, Opacidas } from "./style"
import logito from "../Img/LOgo3.png"

const PedidosBe = () => {
  const [bebida, setBebida] = useState({});
  console.log(bebida)
  const [contar, setContar] = useState(1)
  const nombrePlato = bebida.nombre_bebida
  const precioUnitarios = bebida.precio
  const [mesa, setMesa] = useState()
  const [precios, setPrecios] = useState([])
  console.log(precios,'😊')
  console.log(precioUnitarios)
  const suma = () => {
    if(contar < 20){
      setContar(contar + 1)
      setPrecios(precios + precioUnitarios)
    }  
  }
  const restar = () => {
    if(contar > 1 ){
      setContar(contar - 1)
      setPrecios(precios - precioUnitarios)
    }
  }
  const agregarPedido = () => {
    Axios.post("http://localhost:3002/api/agregarpedido", {
      nombre_plato: nombrePlato,
      cantidad: contar,
      precio: precios,
      mesa: mesa,
    }).then(()=>{
      alert("plato agregado")
    })
    .catch(error => {
      alert("problemas con el plato: " + error.message);
    });
  }
const { id } = useParams();
console.log(id,'🥗😒')
  const obtenerBebida = async () => {
    try {
        const response = await Axios.get(`http://localhost:3002/api/bebida/${id}`);
        setBebida(response.data);
        setPrecios(response.data.precio)
        console.log(response.data,'😊😊😊😊'); // Agrega esta línea
    } catch (error) {
        console.error(error,'😒😒🥗🥗');
    }
  }
  useEffect(() => {
      obtenerBebida();
  }, []);
  
  return (
    <>
      <Background>
        <Platos style={{backgroundColor: bebida.colores}}>
            <Titulo>
              <NomPlato>{bebida.nombre_bebida}</NomPlato>
              <Logito src={logito}></Logito>
            </Titulo>
            <Container>
              <ConImg>
                <CajaImg>
                  <ImgPlato src={"http://localhost:3002/" + bebida.imagen} style={{filter: "drop-shadow(-3px 10px 6px black)"}}></ImgPlato> 
                </CajaImg>
                <Contenido style={{marginLeft:"2em", marginRight:"2em", textAlign:"center"}}>Descripcion: {bebida.descripcion}</Contenido>             
                <Contenido>Precio: ${bebida.precio}</Contenido>
                <Aumentar>
                  <Botones
                  onClick={restar}
                  >-</Botones>
                  <Contenido>{contar}</Contenido>
                  <Botones
                  onClick={suma}
                  >+</Botones>
                </Aumentar>
                <Aumentar>
                  <Link to="/principal"> <Agregar onClick={() => agregarPedido()}>Agregar a Pedido</Agregar></Link>
                  <Link to="/principal"> <Agregar>Volver a Menu</Agregar></Link>
                </Aumentar>
                <Aumentar>
                  <Contenido>Total: ${precios}</Contenido>
                </Aumentar>
              </ConImg>
              <Plato>
                <Adicional style={{marginTop:"2em"}}>
                  <Contenido>Numero de Mesa: 
                    <Infor
                    type="number"
                    name="numero de mesa"
                    placeholder="Numero de mesa"
                    value={mesa}
                    onChange={(e) => setMesa(e.target.value)}
                    ></Infor>
                  </Contenido> 
                </Adicional>
                <Contenido style={{marginLeft:"48px"}}>Desea adicionar o elminar algo al plato </Contenido>
                  <input type="text" style={{padding:"10px 10px",background:"transparent",width:"27rem", borderRadius:"5px", border:"2px solid #000"}}></input>              </Plato>
            </Container>             
        </Platos>                  
      </Background>
    </>
  )
}

export default PedidosBe
