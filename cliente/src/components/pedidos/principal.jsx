import { useState, useEffect } from "react";
import Axios from "axios"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Background, Platos, ConImg, Contenido, ImgPlato, Titulo, NomPlato, Aumentar, Botones, Agregar, Plato, Container, Logito, CajaImg } from "./styled"
import logito from "../Img/LOgo3.png"

const Pedidos = () => {

    const [plato, setPlato] = useState({});
    const [contar, setContar] = useState(1)
    const nombrePlato = plato.nombre_plato
    const precioUnitarios = plato.precio
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

    const obtenerPlato = async () => {
        try {
            const response = await Axios.get(`http://localhost:3002/api/plato/${id}`);
            setPlato(response.data);
            setPrecios(response.data.precio)
          console.log(response.data,'😊😊😊😊'); // Agrega esta línea
        } catch (error) {
            console.error(error,'😒😒');
        }
    }

    // const agregarPedido = () => {
    // Axios.post("http://localhost:3002/api/agregarpedido", {
    //     nombre_plato: nombrePlato,
    //     cantidad: contar,
    //     precio: precios,
    // }).then((response)=>{
    //     // alert("plato agregado")
    //     console.log("Respuesta del servidor:", response.data);
    //     obtenerPlato()
    // })
    
    // .catch(error => {
    //     alert("problemas con el plato: " + error.message);
    // });
    // }

      //localstorage

  const agrega = () => { //copia los platos que ya tiene y agrega uno nuevo
    const nuevoPlato = { nombre_plato: nombrePlato, cantidad: contar, precio: precios }; 
    setPlatos([...platos, nuevoPlato]);
    
  };
  
  const [platos, setPlatos] = useState(() => { //para almacenar los platos
    const platoLocalStorage = JSON.parse(localStorage.getItem("platico"));
    return Array.isArray(platoLocalStorage) && platoLocalStorage.length > 0
      ? platoLocalStorage
      : [];
  });

  useEffect(() => { //ejecuta el localstorage para que almacene los plato primero los convierte en string con el stringify
    localStorage.setItem("platico", JSON.stringify(platos));
  }, [platos]);

    
const { id } = useParams();
console.log(id,'🥗')


useEffect(() => {
    obtenerPlato();
}, []);

return (
<>
    <Background>
        <Platos>
            <Titulo>
                <NomPlato>{plato.nombre_plato}</NomPlato>
                <Logito src={logito}></Logito>
            </Titulo>
            <Container>
                <ConImg>
                    <CajaImg>
                        <ImgPlato src={"http://localhost:3002/" + plato.imagen} style={{filter: "drop-shadow(-3px 10px 6px black)"}}></ImgPlato>  
                    </CajaImg>
                    <Contenido>Precio: ${plato.precio}</Contenido>
                </ConImg>
                <Plato>
                    <Contenido style={{marginLeft:"2em", marginRight:"2em", textAlign:"center"}}>Descripcion: {plato.descripcion}</Contenido>            
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
                        <Agregar onClick={() => agrega()}>Agregar a Pedido</Agregar>
                        <Link to="/menu"><Agregar>Volver a Menu</Agregar></Link>
                    </Aumentar>
                    <Aumentar>
                        <Contenido>Total: ${precios}</Contenido>
                    </Aumentar>
                </Plato>
            </Container>             
        </Platos>
    </Background>
</>
)
}

export default Pedidos
