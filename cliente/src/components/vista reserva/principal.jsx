import React, { useState } from "react";
import {Link} from "react-router-dom"
import { Container, Box, Box2, Salir, Salir2 } from "./styled";
import mesa from "../Img/mesa.png";
import {  BsBoxArrowLeft } from "@react-icons/all-files/bs/BsBoxArrowLeft";


export const Reserva = () => {
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
    const [mesas, setMesas] = useState(Array(Mesa.length).fill(false));
    const cambiarEstadoBoton = (index) => {
        const mesasActualizadas = [...mesas];
        mesasActualizadas[index] = !mesasActualizadas[index];
        setMesas(mesasActualizadas);
    };
    return (
        <>
            <Salir> 
                <Link to="/principal">
                    <Salir2><BsBoxArrowLeft style={{color:"white"}}></BsBoxArrowLeft></Salir2>
                </Link>                
            </Salir>
            <Container>  
                {Mesa.map((p, index) => (
                    <React.Fragment key={index}>
                        <Box
                            style={{
                                backgroundImage: `url(${p.imagen})`,
                                opacity: mesas[index] ? 0.6 : 1,
                                backgroundSize: "cover",
                                position: "relative",
                            }}
                            onClick={() => cambiarEstadoBoton(index)}
                        >
                            {mesas[index] && (
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        fontSize: "30px",
                                        fontWeight: "bold",
                                        color: "white",
                                    }}
                                >
                                    Reservado
                                </div>
                            )}
                        </Box>
                        <Box2>{p.nombre}</Box2>
                    </React.Fragment>
                ))}
            </Container>
        </>
    );
};
