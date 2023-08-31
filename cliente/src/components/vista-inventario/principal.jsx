import React from "react";
import {AppContainer} from "./styled"
import TablaInventario from '../tabla-inventario/clumnas';

const inventarioCampos = [
    "Id",
    "Nombre",
    "Presentacion",
    "Categoria",
    "Unidad",
    "Precio"
];

const inventarioDatos = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
];

export const Inventario = () => {
return (
    <AppContainer>
        <TablaInventario campos={inventarioCampos} datos={inventarioDatos} />
    </AppContainer>
    );
};
