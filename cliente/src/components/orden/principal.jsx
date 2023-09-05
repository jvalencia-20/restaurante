// import Axios from "axios"
import { useEffect, useState } from "react"
import { Container, Titulo, ConTitulos, Titulos, Eliminar, Pedir, Conten } from "./styled"
import { Link } from "react-router-dom";

const Carrito = () => {
    // const [compras, setCompras] = useState([]);

    // console.log(compras.precio)
    const [totalPrecio, setTotalPrecio] = useState(0);
    // console.log(totalPrecio)

//     const Compra = () => {
//     Axios.get("http://localhost:3002/api/compras").then((response) => {
//         setCompras(response.data)
//         console.log(response.data)
//         const total = response.data.reduce((acumulador, compra) => acumulador + compra.precio, 0);
//         setTotalPrecio(total);
//     })
//     .catch(error => {
//     // alert("hola: " + error.message);
//     });
// }

//localstorage
//recuperas los datos del localstorage y con el parse los convierte en array nuevamente

const [plato, setPlatos] = useState([])

useEffect(() => {
  const plato = JSON.parse(localStorage.getItem("platico"));
  const platoLocalStorage = JSON.parse(localStorage.getItem("platico"));
  if (Array.isArray(plato)) {
    setPlatos(plato);
    const total = plato.reduce((acumulador, compra) => acumulador + compra.precio, 0);
    setTotalPrecio(total);
  }
  setPlatos(platoLocalStorage);
}, []);

const eliminar = (index) => {
  // Obtén los datos actuales de localStorage
  const platoLocalStorage = JSON.parse(localStorage.getItem("platico"));

  // Verifica si los datos son un array y si el índice es válido
  if (Array.isArray(platoLocalStorage) && index >= 0 && index < platoLocalStorage.length) {
    // Utiliza splice para eliminar el elemento en el índice especificado
    platoLocalStorage.splice(index, 1);

    // Guarda los datos actualizados en localStorage
    localStorage.setItem("platico", JSON.stringify(platoLocalStorage));

    // Actualiza el estado local (si es necesario)
    setPlatos(platoLocalStorage);
  }
}

// const eliminarProducto = (id_plato) => {
//     Axios.delete(`http://localhost:3002/api/agrega_comida/${id_plato}`)
//         .then((response) => {
//         console.log("Respuesta del servidor:", response.data);
//         Compra();
//         })
//         .catch(error => {
//         console.error("Error al eliminar el producto:", error);
//     });
//     };

//     useEffect(() => {
//         Compra()
//     },[])

return (
    <>
    <Container>
        <Titulo>Orden</Titulo>
            {/* <Titulo>{platoLocalStorage.nombre_plato}</Titulo> */}
        <ConTitulos>
            <Titulos>Nombre</Titulos>
            <Titulos>Cantidad</Titulos>
            <Titulos>Precio</Titulos>
            <Titulos>Eliminar</Titulos>
        </ConTitulos>
        {/* <Conten>
        {compras.map((compra, index) => {
            return (
            <ConTitulos>
                <Titulos>{compra.nombre_plato}</Titulos>
                <Titulos>{compra.cantidad}</Titulos>
                <Titulos>${compra.precio}</Titulos>
                <Eliminar onClick={() => eliminarProducto(compra.id_plato)}>X</Eliminar>             
            </ConTitulos>
        )})}    
        </Conten>         */}
        <Conten>
        {Array.isArray(plato) ? (
        plato.map((compra, index) => (
        <ConTitulos key={index}>
            <Titulos>{compra.nombre_plato}</Titulos>
            <Titulos>{compra.cantidad}</Titulos>
            <Titulos>${compra.precio}</Titulos>
            <Eliminar onClick={() => eliminar(index)}>X</Eliminar>
        </ConTitulos>
        ))) : (
        <p>No hay datos disponibles</p>
        )}             
            </Conten>
        <ConTitulos>
            <Titulos>Total: ${totalPrecio}</Titulos>
            <Link to="/domicilio"><Pedir>Pedir Order</Pedir></Link>
        </ConTitulos>
    </Container>
    </>
    )
}

export default Carrito