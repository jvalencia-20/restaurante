import React, {useState, useEffect} from 'react';
import  Axios  from 'axios';
import {Container,CajaElementos, CajaTitulo, CajaProductos, CamposInf,FilaDatosContainer,Celda,} from './styled'; 

function FilaDatos({ datos }) {
    const [inventario,setInventario] = useState([])
    const Buscar = () => {
    Axios.get("http://localhost:3002/api/traerproducto").then((response)=>{
        setInventario(response.data)
        console.log(response.data)
    })
    .catch(error => {
    })
}

    // console.log(inventario)

useEffect(()=>{
    Buscar()
},[])
return (
    <FilaDatosContainer>
        {datos.map((dato, index) => (
        <Celda key={index}>{dato}</Celda>
        ))}
    </FilaDatosContainer>
);
}

function TablaInventario({ campos, datos }) {

    return (
    <Container>
        <CajaElementos>
            <CajaTitulo>
                <h2>Hoja de inventario </h2>
            </CajaTitulo>
            <CajaProductos>
                {campos.map((campo, index) => (
                <CamposInf key={index}>{campo}</CamposInf>
                ))}
            </CajaProductos>
            {datos.map((fila, index) => (
            <FilaDatos key={index} datos={fila} />
            ))}
        </CajaElementos>
    </Container>
);
}

export default TablaInventario;
