import { useState, useEffect } from "react";
import Axios from "axios"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Background, Platos, ConImg, Contenido, ImgPlato, Titulo, NomPlato, Aumentar, Botones, Agregar, Plato, Container, Logito, CajaImg } from "./styled"
import logito from "../Img/LOgo3.png"
import Hearder from "../Header/header";
import Footer from "../Footer/principal";
import { PUBLIC } from "../router/path";

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
            console.log(response.data,'😊😊😊😊'); 
        } catch (error) {
            console.error(error,'😒😒');
        }
    }
    const agregarPedido = () => {
    Axios.post("http://localhost:3002/api/agregarpedido", {
        nombre_plato: nombrePlato,
        cantidad: contar,
        precio: precios,
    }).then((response)=>{
        console.log("Respuesta del servidor:", response.data);
        obtenerPlato()
    })
    
    .catch(error => {
        alert("problemas con el plato: " + error.message);
    });
    }
    const { id } = useParams();
    console.log(id,'🥗')
    useEffect(() => {
    obtenerPlato();
}, []);

return (
<>
    <Background>
        <Hearder/>
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
                            <Agregar onClick={() => agregarPedido()}>Agregar a Pedido</Agregar>
                            <Link to={PUBLIC}><Agregar>Volver a Menu</Agregar></Link>
                    </Aumentar>
                    <Aumentar>
                        <Contenido>Total: ${precios}</Contenido>
                    </Aumentar>
                </Plato>
            </Container>             
        </Platos>
        <Footer/>
    </Background>
</>
)
}

export default Pedidos
