import React, { useState } from "react";
import { Container, Box, Box2 } from "./styled";
import mesa from "../Img/mesa.png";

export const Mesa = () => {
    const Mesa = [
        { imagen: mesa, nombre: "Mesa 1" },
        { imagen: mesa, nombre: "Mesa 2" },
        { imagen: mesa, nombre: "Mesa 3" },
        { imagen: mesa, nombre: "Mesa 4" },
        { imagen: mesa, nombre: "Mesa 5" },
        { imagen: mesa, nombre: "Mesa 6" },
        { imagen: mesa, nombre: "Mesa 7" },
        { imagen: mesa, nombre: "Mesa 8" },
    ];
    const [selectedTableIndex, setSelectedTableIndex] = useState(null);
    const [reservas, setReservas] = useState(Array(Mesa.length).fill({ Producto: "", Cantidad: "", Total: 0 }));
    const [mesaOcupada, setMesaOcupada] = useState(Array(Mesa.length).fill(false));
    const handleTableClick = (index) => {
        setSelectedTableIndex(index);
    };
    const handleReservationChange = (field, value) => {
        const updatedReservas = [...reservas];
        updatedReservas[selectedTableIndex][field] = value;
        setReservas(updatedReservas);
        const allFieldsEmpty = !value && !updatedReservas[selectedTableIndex].Producto && !updatedReservas[selectedTableIndex].Cantidad && !updatedReservas[selectedTableIndex].Total;
        const updatedMesaOcupada = [...mesaOcupada];
        updatedMesaOcupada[selectedTableIndex] = !allFieldsEmpty;
        setMesaOcupada(updatedMesaOcupada);
    };
    const handleTotalChange = (Total) => {
        const updatedReservas = [...reservas];
        updatedReservas[selectedTableIndex].Total = Total;
        setReservas(updatedReservas);
        const allFieldsEmpty = !Total && !updatedReservas[selectedTableIndex].Producto && !updatedReservas[selectedTableIndex].Cantidad && !updatedReservas[selectedTableIndex].Total;
        const updatedMesaOcupada = [...mesaOcupada];
        updatedMesaOcupada[selectedTableIndex] = !allFieldsEmpty;
        setMesaOcupada(updatedMesaOcupada);
    };
    return (
        <>
            <Container>
                {Mesa.map((p, index) => (
                    <React.Fragment key={index}>
                        <Box
                            style={{
                                backgroundImage: `url(${p.imagen})`,
                                backgroundSize: "cover",
                                position: "relative",
                            }}
                            onClick={() => handleTableClick(index)}
                        >
                            {selectedTableIndex === index && (
                                <div style={{ position: "absolute", bottom: "10px", left: "10px", color: "white" }}>
                                    <input
                                        type="text"
                                        placeholder="Producto"
                                        value={reservas[index].plato}
                                        onChange={(e) => handleReservationChange("Producto", e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Cantidad"
                                        value={reservas[index].bebida}
                                        onChange={(e) => handleReservationChange("Cantidad", e.target.value)}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Total"
                                        value={reservas[index].Total}
                                        onChange={(e) => {
                                            handleReservationChange("total", e.target.value);
                                            handleTotalChange(e.target.value);
                                        }}
                                    />
                                </div>
                            )}
                        </Box>
                        <Box2>
                            {p.nombre}
                            {mesaOcupada[index] ? (
                                <span style={{ color: "red" }}> Ocupada</span>
                            ) : (
                                <span style={{ color: "green" }}> Disponible</span>
                            )}
                            <button style={{width:"7rem",height:"2rem",fontSize:"15px",background:"none",color:"white"}}>Total pedido</button>
                        </Box2>
                    </React.Fragment>
                ))}
            </Container>
        </>
    );
};
