import Axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Titulo, ConTitulos, Titulos, Eliminar, Pedir } from "./styled"


const Carrito = () => {
    const [compras, setCompras] = useState([]);
    const [totalPrecio, setTotalPrecio] = useState(0);
    console.log(compras.map(compra => compra.precio)); 
    console.log(totalPrecio); 
    const Compra = () => {
    Axios.get("http://localhost:3002/api/compras").then((response) => {
        setCompras(response.data)
        console.log(response.data)
        const total = response.data.reduce((acumulador, compra) => acumulador + compra.precio, 0);
        setTotalPrecio(total);
    })
    .catch(error => {
    });
}

const eliminarProducto = (id_plato) => {
    Axios.delete(`http://localhost:3002/api/agrega_comida/${id_plato}`)
        .then((response) => {
        console.log("Respuesta del servidor:", response.data);
        Compra();
        })
        .catch(error => {
        console.error("Error al eliminar el producto:", error);
    });
    };
    const navigate = useNavigate()
    const enviarOrden = () => {
        if (compras.length === 0) {
            alert("Debe de agregar productos al carrito");
            return;
        }
        const pedidos = compras.map((compra) => {
            return {
            nombre_plato: compra.nombre_plato,
            cantidad: compra.cantidad,
            precio: compra.precio,
            mesa: compra.mesa,
            };
        });
        Axios.post("http://localhost:3002/api/factura", { pedidos })
        .then((response) => {
            console.log("Factura creada:", response.data);
            navigate("/factura", { state: { facturaDetalles: response.data } });
            })
            .catch((error) => {
            console.error("Error al enviar la orden:", error);
        });
        };
    useEffect(() => {
        Compra()
    },[])
return (
    <>
    <Container>
            <Titulo>Orden</Titulo>
        <ConTitulos>
            <Titulos>Nombre</Titulos>
            <Titulos>Cantidad</Titulos>
            <Titulos>Precio</Titulos>
            <Titulos>Mesa</Titulos>
            <Titulos>Eliminar</Titulos>
        </ConTitulos>
        {
            compras.map((compra, index) => {
                return (
                <ConTitulos key={compra.id_plato}>
                <Titulos>{compra.nombre_plato}</Titulos>
                <Titulos>{compra.cantidad}</Titulos>
                <Titulos>${compra.precio}</Titulos>
                <Titulos>{compra.mesa}</Titulos>
                <Eliminar onClick={() => eliminarProducto(compra.id_plato)}>X</Eliminar>             
            </ConTitulos>
        )
    })
    }
        <ConTitulos>
            <Titulos>Total: ${totalPrecio}</Titulos>
            <Pedir onClick={enviarOrden}>Enviar Order</Pedir>
        </ConTitulos>
    </Container>
    </>
    )
}

export default Carrito