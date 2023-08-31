import React, { useEffect, useState } from "react";
import Axios from "axios"

import Hearder from "../Header/header";
import Footer from "../Footer/principal";
import { Container, ConteCarrusel, Contenedor } from "./styled";

const Informacion = () => {
  const [informacion, setInformacion] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % total);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + total) % total);
  };

  useEffect(() => {
    Axios.get("http://localhost:3002/api/informacion")
      .then((response) => {
        setInformacion(response.data);
        setTotal(response.data.length);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  setTimeout(() => {
  nextImage();
  }, 2000);


  
  return (
    <>
      <Container>
        <Hearder />
        <ConteCarrusel>
          <button onClick={prevImage}>Atrás</button>
          <div style={{textAlign:"center" }}>
            {informacion.map((infor, index) => (
              <Contenedor
                key={index}
                style={{
                  backgroundImage: `url(http://localhost:3002/${infor.imagen})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  display: index === currentImage ? "block" : "none"
                }}
              >
                <h1>{infor.Titulo}</h1>
                <h3>{infor.Informacion}</h3>
                <h3>{infor.noticia}</h3>
              </Contenedor>
            ))}
          </div>
          <button onClick={nextImage}>Siguiente</button>
        </ConteCarrusel>
        <Footer />
      </Container>
    </>
  );
};

export default Informacion;