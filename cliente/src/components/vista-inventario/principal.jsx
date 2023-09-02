import React,{useEffect,useState} from "react";
import {AppContainer} from "./styled"
import TablaInventario from '../tabla-inventario/clumnas';
import  Axios  from "axios";

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
    const [inventario,setInventario] = useState([])
// useEffect(() => {
//     Axios.get("http://localhost:3002/api/traerproducto")
//     .then((response) => {
//         console.log("Response from API:",response.data)
//         setInventario(response.data)
//         console.log(inventario)
//     }).catch((error) => {
//         console.error("Error fetching data:", error)
//     })
// }, [])
// const Buscar = () => {
//     Axios.get("http://localhost:3002/api/traerproducto").then((response)=>{
//         setInventario(response.data)
//         console.log(response.data)
//     })
//     .catch(error => {
//     })
// }

// console.log(inventario)

// useEffect(()=>{
//     Buscar()
// },[])

return (
    <AppContainer>
        <TablaInventario campos={inventarioCampos} datos={inventarioDatos} />
    </AppContainer>
    );
};
