import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import Axios from "axios"
import {Container, Conatiner2, Box, Box2, Container3, Box3, Box4, Salir} from "./styled"
import {  BsBoxArrowLeft } from "@react-icons/all-files/bs/BsBoxArrowLeft";



export const Domicilio = () => {

    const [nombre, setNombre] = useState()
    const [direccion, setDireccion] = useState()
    
    //localstorage
    const [plato, setPlatos] = useState([])

    useEffect(() => { //mantiene en ejecucion lo que esta en el localstorage
      const plato = JSON.parse(localStorage.getItem("platico")); //llega en string pero con el parse lo convierte de nuevo en un array de objetos
      if (Array.isArray(plato)) {
        setPlatos(plato);
      }
    }, []);

    //sacamos los platos
    // const [nombrePlato, setNombrePlato] = useState([]) 
    // console.log(nombrePlato);
    // const [contar, setContar] = useState([]) 
    // console.log(contar);
    // const [precios, setPrecios] = useState([])
    // console.log(precios);

    // plato.map((platos, index) =>{
    //     return (
    //         setNombrePlato([])
    //     )
    // })

    //agregar
    const agregarPedido = () => {
        plato.forEach((platoItem) => { //iteramos los item que estan en el localstarage
            Axios.post("http://localhost:3002/api/agregarpedido", {
              nombre_plato: platoItem.nombre_plato,
              cantidad: platoItem.cantidad,
              precio: platoItem.precio,
              nombre: nombre,
              direccion: direccion,
            })
              .then(() => {
                // Aquí puedes realizar alguna acción después de que se envíe el plato a la base de datos
              })
              .catch((error) => {
                alert("Problemas con el plato: " + error.message);
              });
          });
        
          // Opcional: Limpiar el estado plato después de enviar los datos
          setPlatos([]);
        };

    return(
    <>
        <Container>
            <Conatiner2>
                <Box><h2>Domicilio</h2></Box>
                <Box2><h2>Agrega tu datos para hacer la entrega</h2></Box2>
                <Container3>
                    <Box3>
                        <span style={{paddingBottom:"50px",paddingTop:"20px"}}>Nombre y Apellido:</span>
                        <span style={{paddingBottom:"50px",paddingTop:"10px"}}>Direccion:</span>
                        <span style={{paddingBottom:"50px"}}>Especifique cuidad o logalidad de entrega:</span>
                    </Box3>
                    <Box4>
                        <input 
                        type="text" 
                        name="nombre"
                        placeholder="nombre"
                        autoComplete="off"
                        value={nombre}
                        onChange={ev => setNombre(ev.target.value)}
                        style={{marginBottom:"50px",color:"white",marginTop:"15px",padding:"6px 12px",backgroundColor:"transparent"}} />
                        <input 
                        type="text" 
                        name="direccion"
                        placeholder="direccion"
                        autoComplete="off"
                        value={direccion}
                        onChange={ev => setDireccion(ev.target.value)}
                        style={{marginBottom:"40px",color:"white",padding:"6px 12px",backgroundColor:"transparent"}}/>
                        <input type="text" style={{marginBottom:"50px",color:"white",paddingBottom:"50px",padding:"15px 12px",backgroundColor:"transparent"}}/>
                    </Box4>
                </Container3>
                <Link to="/informacion">
                <button onClick={agregarPedido} style={{width:"6rem",height:"2rem",marginTop:"70px",fontSize:"16px",backgroundColor:"transparent",color:"white"}}>Enviar</button>               
                </Link>
            </Conatiner2>
            <Link to="/informacion">
                <Salir>
                    <BsBoxArrowLeft style={{fontSize:"29px"}}></BsBoxArrowLeft>
                </Salir>
            </Link>
        </Container>
    </>
    )
}