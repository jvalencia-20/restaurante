import React from 'react';
import {Container,CajaElementos, CajaTitulo, CajaProductos, CamposInf,FilaDatosContainer,Celda,} from './styled'; 

function FilaDatos({ datos }) {
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
