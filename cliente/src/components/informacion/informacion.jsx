import React, { useEffect, useState } from "react";
import Axios from "axios"
import {Carousel} from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Hearder from "../Header/header";
import { Container, ConteCarrusel, Contenedor } from "./styled";

const Informacion = () => {
  const carouselStyle = {
    width: '700px',   // Ancho deseado
    height: '500px',  // Altura deseada
};

  const [informacion, setInformacion] = useState([])
  
  //adicional
  const [total, setTotal] = useState()
  const [active, setActive] = useState(0)
  const siguiente = () => {
    setActive((active + 1) % total)
  }
  const informaciones = () => {
    Axios.get("http://localhost:3002/api/informacion").then((response) => {
        setInformacion(response.data)
        console.log(response.data)
        setTotal(response.data.length)
    })
    .catch(error => {
    })
  } 
  useEffect(()=>{
    informaciones()
  })
  return (
  <>
    <Container>
      <Hearder/>
      <ConteCarrusel>
        <Carousel 
            selectedItem={active}
            showIndicators={false}
            autoPlay={true} 
            interval={2000} 
            showStatus={false} 
            infiniteLoop={true}
            style={carouselStyle}>         
            {informacion.map((infor, index) => {
              return (
            <Contenedor style={{backgroundImage:`url(${"http://localhost:3002/" + infor.imagen})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
              <h1>{infor.Titulo}</h1>
            </Contenedor>
            )})}          
        </Carousel>
      </ConteCarrusel>
    </Container>
  </>
  )
}

export default Informacion