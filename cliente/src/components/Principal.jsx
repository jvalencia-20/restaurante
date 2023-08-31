import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { PrincipalConnect } from "./vista-principal-domicilio/principal";
import Crearcuenta from "../components/Crear-cuenta/Principal"
import Logini from "../components/login/Principal"
import { Domicilio } from "./vista-domicilio/principal";
import { Reserva } from "./vista reserva/principal";
import Pedidos from "./pedidos/principal";
import PedidosBe from "./PedidoBebida/pedido1"
import Carrito from "./orden/principal";
import { Dashboard } from "./dashboard/dashboardj";
import Hearder from "./Header/header";
import Informacion from "./informacion/informacion";
import AuthContextProvider from "./context/AuthContext";
import PublicRoute from "./rout/PublicRoute";
import PrivateRoute from "./rout/PrivateRoute";
import Logout from "./login/logout";
import VistaMesa from "./vista-mesa/principal"
import { LOGOUT, PRIVATE, PUBLIC } from "./router/path";

export const Principal = () => {
    
    return(
    <>  
        <AuthContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={PUBLIC} element={<PublicRoute />}>
                        <Route  index element={<PrincipalConnect />}/>   
                        {/* <Route path="/bebida" element={<Bebidas/>}></Route> */}
                        <Route path="/pedido/:id" element={<Pedidos />}></Route>
                        <Route path="/pedidoBebida/:id" element={<PedidosBe/>}></Route>
                        <Route path="/ordenes" element={<Carrito />}></Route>
                        <Route path="/Hearder" element={<Hearder/>}></Route>
                        <Route path="/informacion" element={<Informacion/>}></Route>
                        {/* <Route path="/ordenes" element={<Carrito pedido={JSON.parse(localStorage.getItem('pedido')) || []} />} /> */}
                        <Route path="/domicilio" element={<Domicilio/>}></Route>
                        <Route path="/reserva" element={<Reserva/>}></Route>
                        <Route path= "/mesa" element={<VistaMesa/>}></Route>
                        <Route path="/login" element={<Logini/>}></Route>
                    </Route>

                    <Route path={PRIVATE} element={<PrivateRoute/>}>
                        <Route path="/private/register" element={<Crearcuenta/>}></Route>
                        <Route index element={<Dashboard/>}></Route>
                        <Route path={LOGOUT} element={<Logout/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>
    </>
    )
}