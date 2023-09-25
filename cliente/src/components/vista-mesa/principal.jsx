import React, { useState, useEffect } from "react";
import { Container, Box, ButtonContainer, Button } from "./styled";
import { useNavigate } from "react-router-dom";
import { useDataState } from "./data.context/data.state.context";
import axios from "axios";
import Factura from "../vista-factura/principal";
import mesaFunctions from "./mesa.services/mesa.services";

const VistaMesa = () => {
  const [mesas, setMesas] = useState([]);
  const navigate = useNavigate();
  const { mesaData, setMesaData } = useDataState();
  const [selectedTableIndex, setSelectedTableIndex] = useState(-1);
  const [showFactura, setShowFactura] = useState(false);
  const [reservas, setReservas] = useState(Array(mesas.length).fill({ Producto: "", Cantidad: "", Total: 0 }));
  const [mesaOcupada, setMesaOcupada] = useState(Array(mesas.length).fill(false));


  useEffect(() => {
  }, [selectedTableIndex]);

  useEffect(() => {
    if (selectedTableIndex !== -1) {
      setShowFactura(true);
    } else {
      setShowFactura(false);
    }
  }, [selectedTableIndex]);



  const handleTableClick = (mesaNumber) => {
    if (!mesaOcupada[mesaNumber - 1]) {
      setSelectedTableIndex(mesaNumber - 1);
      sendReservationData(mesaNumber, reservas);
    }
  };

  const sendReservationData = async (mesaNumber, reservas) => {
    try {
      const mesaDataResponse = await mesaFunctions.getMesa(mesaNumber);
      setMesaData(mesaDataResponse);
      navigate(`/private/todofisica/factura/${mesaDataResponse.di}`);
    } catch (error) {
      console.error("Error sending reservation data:", error);
    }
  };

  const handleBackToOrdenClick = () => {
    navigate("/private/todofisica/fisica");
  };

  const getMesas = () => {
    axios.get("http://localhost:3002/api/mesas").then((response) => {
      setMesas(response.data);
    });
  };

  useEffect(() => {
    getMesas();
  }, []);

  return (
    <>
      <Container>
        {mesas.map((mesa, index) => (
          <React.Fragment key={mesa.id}>
            <Box
              style={{
                backgroundImage: `url(${"http://localhost:3002/" + mesa.imagen_url})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                cursor: "pointer",
              }}
              onClick={() => handleTableClick(index + 1)}
            >
              <h1 style={{ position: "absolute", top: "10px", left: "10px", color: "white" }}>
                {mesa.mesa}
              </h1>
            </Box>
          </React.Fragment>
        ))}
      </Container>
      <ButtonContainer>
        <Button onClick={handleBackToOrdenClick}>Regresar al menu</Button>
      </ButtonContainer>
      {showFactura && <Factura mesa={selectedTableIndex + 1} reservas={reservas} />}
    </>
  );
};

export default VistaMesa;
