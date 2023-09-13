import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Background, ContPrincipal, ContFactura, ResPrecios, ContBoton, BotonImprimir} from "./styled";
import Axios from "axios";

const RecibirOrden = () => {
    const navigate = useNavigate()
    const [mesa, setMesa] = useState({
        id: 0, 
        bebida: {
            nombre: '',
            precio: 0,
            cantidad: 0,
        },
        plato: {
            nombre: '',
            precio: 0,
            cantidad: 0,
        }
    });
    const [mesasDisponibles, setMesasDisponibles] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    const [platos, setPlatos] = useState([]);
    const [platoSeleccionado, setPlatoSeleccionado] = useState(null);
    const [bebidas, setBebidas] = useState([]);
    const [bebidaSeleccionada, setBebidaSeleccionada] = useState(null);
    const [productosSeleccionados, setProductosSeleccionados] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [cantidadPlato, setCantidadPlato] = useState(0);
    const [cantidadBebida, setCantidadBebida] = useState(0);
    const [mesaSeleccionada, setMesaSeleccionada] = useState(null)
    const [platosSeleccionados, setPlatosSeleccionados] = useState([]);
    const [bebidasSeleccionadas, setBebidasSeleccionadas] = useState([]);
        useEffect(() => {
        Axios.get("http://localhost:3002/api/allPlatos")
            .then((response) => {
                setPlatos(response.data);
            })
            .catch((error) => {
            });
        Axios.get("http://localhost:3002/api/bebidas")
            .then((response) => {
                setBebidas(response.data);
            })
            .catch((error) => {
            });
    }, []);
    const handlePlatoChange = (selectedPlatoId) => {
        setPlatoSeleccionado(selectedPlatoId);
        const selectedPlato = platos.find((plato) => plato.id_plato == selectedPlatoId);
        if (selectedPlato) {
            const platoSeleccionado = {
                nombre: selectedPlato.nombre_plato,
                precio: selectedPlato.precio,
                cantidad: 1,
        };
            const nuevaListaPlatos = [...platosSeleccionados, platoSeleccionado];
            setPlatosSeleccionados(nuevaListaPlatos);
        }
    };
    const handleBebidaChange = (selectedBebidaId) => {
        setBebidaSeleccionada(selectedBebidaId);
        const selectedBebida = bebidas.find((bebida) => bebida.id_bebida == selectedBebidaId);
        if (selectedBebida) {
            const bebidaSeleccionada = {
                nombre: selectedBebida.nombre_bebida,
                precio: selectedBebida.precio,
                cantidad: 1,
        };
        const nuevaListaBebidas = [...bebidasSeleccionadas, bebidaSeleccionada];
        setBebidasSeleccionadas(nuevaListaBebidas);
        }
    };
    const handleAgregarPlato = () => {
        if (cantidadPlato > 0 && platoSeleccionado !== null) {
            const selectedPlato = platos.find((plato) => plato.id_plato == platoSeleccionado);
            if (selectedPlato) {
                const cantidadPlatoPedido = cantidadPlato;
                const nuevaListaProductos = [...productosSeleccionados, {
                nombre: selectedPlato.nombre_plato,
                cantidad: cantidadPlatoPedido, 
                precio: selectedPlato.precio * cantidadPlatoPedido,
            }];
            setProductosSeleccionados(nuevaListaProductos);
            setSubtotal(subtotal + selectedPlato.precio * cantidadPlatoPedido);
            setMesa((prevMesa) => ({
                ...prevMesa,
                plato: {
                    nombre: selectedPlato.nombre_plato,
                    precio: selectedPlato.precio,
                    cantidad: cantidadPlatoPedido,
                },
            }));
        };
        }
    };
    const handleAgregarBebida = () => {
        if (cantidadBebida > 0 && bebidaSeleccionada !== null) {
            const selectedBebida = bebidas.find((bebida) => bebida.id_bebida == bebidaSeleccionada);
            if (selectedBebida) {
                const cantidadBebidaPedido = cantidadBebida;
            const nuevaListaProductos = [...productosSeleccionados, {
                nombre: selectedBebida.nombre_bebida,
                cantidad: cantidadBebidaPedido, 
                precio: selectedBebida.precio * cantidadBebidaPedido,
            }];
            setProductosSeleccionados(nuevaListaProductos);
            setSubtotal(subtotal + selectedBebida.precio * cantidadBebidaPedido);
            setMesa((prevMesa) => ({
                ...prevMesa,
                bebida: {
                    nombre: selectedBebida.nombre_bebida,
                    precio: selectedBebida.precio,
                    cantidad: cantidadBebidaPedido,
                },
            }));
        };
        }
    };
    const handleBorrarOrden = () => {
        setProductosSeleccionados([]);
        setSubtotal(0);
        setMesa({});
    };
    const handleEliminarOrden = (index) => {
        const nuevosProductos = [...productosSeleccionados];
        const productoEliminado = nuevosProductos.splice(index, 1);
        setProductosSeleccionados(nuevosProductos);
        setSubtotal(subtotal - productoEliminado[0].precio);
    };
    const handleMesaSeleccionada = (event) => {
        const numeroMesa = event.target.value;
        setMesaSeleccionada(numeroMesa);
    };
    const enviarPedidoAMesa = () => {
        if (!mesaSeleccionada) {
            return;
        }
        if (productosSeleccionados.length === 0) {
            return;
        }
        const pedido = {
            numeroMesa: mesaSeleccionada,
            productos: productosSeleccionados, 
        };
        Axios.post("http://localhost:3002/api/crear-mesa", pedido)
            .then((response) => {
                navigate("/private/todofisica/mesa");
            })
            .catch((error) => {
        });
    };
    const handlePrintClick = () => {
        window.print(); 
    };

return (
    <Background>
        <ContPrincipal>
            <h1 style={{ textAlign: "center", color:"white" }}>Orden</h1>
            <BotonImprimir style={{ display: "flex", justifyContent: "center", margin: "auto" }} onClick={() => navigate('/private/todofisica/fisica')}>Regresar</BotonImprimir>
            <ContFactura>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <select onChange={handleMesaSeleccionada}>
                    <option value="">Seleccione una mesa</option>
                    {mesasDisponibles.map((numeroMesa, index) => (
                        <option key={index} value={numeroMesa}>
                            Mesa {numeroMesa}
                        </option>
                    ))}
                </select>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td style={{ width: "33%" }}>
                            <select
                                value={platoSeleccionado ?? ""}
                                onChange={(e) => {
                                    const selectedPlatoName = e.target.value; 
                                    handlePlatoChange(selectedPlatoName)
                                }}>
                                <option value="">Seleccionar plato</option>
                                {platos.map((plato) => (
                                <option
                                    key={plato.id_plato}
                                    value={plato.id_plato}>
                                    {plato.nombre_plato}
                                </option>
                                ))}
                            </select>
                        </td>
                        <td style={{ width: "33%" }}>
                            <input
                                type="number"
                                value={cantidadPlato}
                                onChange={(e) => {
                                    const newCantidadPlato = parseInt(e.target.value, 10);
                                    if (!isNaN(newCantidadPlato)) {
                                        setCantidadPlato(newCantidadPlato);
                                    } else {
                                    }
                                }}/>
                        </td>
                        <td style={{ width: "33%" }}>
                            <button onClick={handleAgregarPlato}>Agregar</button>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: "33%" }}>
                            <select
                                value={bebidaSeleccionada ?? ""}
                                onChange={(e) => {
                                    const selectedBebidaName = e.target.value; 
                                    handleBebidaChange(selectedBebidaName)
                                }}>
                                <option value="">Seleccionar bebida</option>
                                    {bebidas.map((bebida) => (
                                    <option
                                        key={bebida.id_bebida}
                                        value={bebida.id_bebida}>
                                        {bebida.nombre_bebida}
                                    </option>
                                ))}
                            </select>
                        </td>
                        <td style={{ width: "33%" }}>
                            <input
                                type="number"
                                value={cantidadBebida}
                                onChange={(e) => {
                                    const newCantidadBebida = parseInt(e.target.value, 10);
                                    if (!isNaN(newCantidadBebida)) {
                                        setCantidadBebida(newCantidadBebida);
                                    } else {
                                    }
                            }}/>
                        </td>
                        <td style={{ width: "33%" }}>
                            <button onClick={handleAgregarBebida}>Agregar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <table style={{ marginLeft: "auto", marginRight: "auto"}}>
                        <thead>
                            <tr>
                                <th style={{backgroundColor:"transparent"}}></th>
                                <th style={{width: "200px",backgroundColor:"transparent",color:"white"}}>Nombre</th>
                                <th style={{backgroundColor:"transparent",color:"white"}}>Cantidad</th>
                                <th style={{backgroundColor:"transparent",color:"white"}}>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productosSeleccionados.map((producto, index) => (
                                <tr key={index}>
                                    <td style={{margin: "0", padding: "0"}}>
                                        <button style={{borderRadius: "50%"}} onClick={() => handleEliminarOrden(index)}>x</button>
                                    </td>
                                    <td style={{color:"white"}}>{producto.nombre}</td>
                                    <td style={{color:"white"}}>{producto.cantidad}</td>
                                    <td style={{color:"white"}}>{producto.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ContFactura>
            <ResPrecios>
                <div style={{ marginTop: '20px', textAlign: 'right' }}>
                    <p style={{ fontWeight: 'bolder', fontSize: 'x-large', fontStyle: 'italic', margin: '0',color:"white" }}>Total: $ {subtotal.toFixed(0)}</p>
                </div>
            </ResPrecios>
            <ContBoton>
                <BotonImprimir onClick={handlePrintClick}>Imprimir factura</BotonImprimir>
                <BotonImprimir
                    onClick={enviarPedidoAMesa}
                    disabled={productosSeleccionados.length == 0}
                >
                    Tomar Pedido
                </BotonImprimir>
                <BotonImprimir onClick={handleBorrarOrden}>Borrar orden</BotonImprimir>
                
            </ContBoton>
        </ContPrincipal>
    </Background>
);
};
export default RecibirOrden;