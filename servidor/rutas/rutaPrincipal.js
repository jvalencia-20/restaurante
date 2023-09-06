import { Router } from "express";
// import { getAdmin, getAdmin1, createAdmin, updateAdmin, deleteAdmin } from "../controllers/admin.controllers.js";
import { getCliente, getCliente1, createCliente, updateCliente, deleteCliente, confirmar, deletePlatoCarrito, createProducto, traerProducto } from "../controllers/cliente.controller.js";
import { getEmpleado,getEmpleados,createEmpleado,deleteEmpleado,updateEmpleado } from "../controllers/empleado.controllers.js";
import {getPedidos,getPedido,createPedido,deletePedido,updatePedido} from "../controllers/pedido.controllers.js";
import { createPlato,deletePlato,updatePlato, obtenerPlato, Compra, agregarPedido, Bebidas, obtenerBebida, PlatosSancocho, PlatosCorriente, informacion } from "../controllers/platos.controllers.js";
import { getReserva,getReservas,createReservation,deleteReservation,updateReservation } from "../controllers/reserva.controllers.js";
import { createDomicilio,getDomicilios,getDomicilio, deleteDomicilio, updateDomicilio } from "../controllers/domicilios.controllers.js";
import { getMesa } from "../controllers/mesa.controller.js";
import multer from 'multer';
import {dirname, extname, join} from 'path';
import { fileURLToPath } from "url";
import express from "express";
import jwt from 'jsonwebtoken';
import {pool} from '../db.js'

const SECRET = "secreto"

function verificarToken(req, res, next){
    const token = req.headers.authorization;
    console.log(token,"token en backend")
    if (!token){
        return res.status(401).json({mensaje: "Acceso no autorizado: Se necesita un Token "})
    }
    jwt.verify(token, SECRET, (error, usuario) => {
        if (error) {
            console.log("error aqui")
            return res.status(401).json({mensaje: "Acceso no autorizado: Token no válido."});
            
        }
        req.usuario = usuario;
        next();
    });
}

const router = Router();

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));

const upload = multer({
    storage: multer.diskStorage({
        destination: join(CURRENT_DIR,'../uploads'),
        filename: (req, file, cb) => {
            const fileExtension = extname(file.originalname);
            const fileName = file.originalname.split(fileExtension)[0];
            cb(null, `${fileName}-${Date.now()}${fileExtension}`);
        }
    })
    ,
    limits: {
        fieldSize: 10000000
    }
});

const expressApp = express();

//Tabla admin

// router.get('/admin', getAdmin) //Ruta para obtener todos
// router.get('/admin/:id', getAdmin1) //Ruta para obtener uno
// router.post('/admin', createAdmin) //Ruta para crear uno
// router.patch('/admin/:id', updateAdmin) //Ruta para actualizar
// router.delete('/admin/:id', deleteAdmin) //Ruta para eliminar uno

//Tabla cliente

router.get('/cliente', getCliente) //Ruta para obtener todos
router.get('/cliente/:id', getCliente1) //Ruta para obtener uno
router.post('/createcliente', verificarToken, createCliente) //Ruta para crear uno
router.post('/login', confirmar)
router.patch('/cliente/:id', updateCliente) //Ruta para actualizar
router.delete('/cliente/:id', deleteCliente) //Ruta para eliminar uno

//tabla inventario producto.

router.get('/traerproducto',verificarToken, traerProducto)
router.post('/createproducto', verificarToken, createProducto)

//Tabla empleado

router.get('/empleados',getEmpleados);//ruta para obtener todos los empleados
router.get('/empleado/:id', getEmpleado);//ruta para obtener un empleado por id
router.post('/creacion',createEmpleado);//ruta para crear un empleado
router.delete('/eliminar/:id',deleteEmpleado);//ruta para eliminar un empleado
router.patch('/actualizar/:id', updateEmpleado);//ruta para actualizar empleado

//Tabla pedido

router.get('/pedidos', getPedidos);//ruta para traer todas los pedidos
router.get('/pedido/:id', getPedido);//ruta para traer un pedido por id
router.post('/create', createPedido);//ruta para crear un pedido
router.patch('/actualizacion/:id', updatePedido);//ruta para actualizar un pedido
router.delete('/eliminacion/:id', deletePedido);//ruta para eliminar un pedido

//Tabla plato

router.post('/crearplato', upload.single("imagen"), async (req, res) => {
    try {
        console.log(req.file, "aqui llega el upload");
        
        const { nombre_plato, descripcion, precio, tipo_plato } = req.body;
        const imagen = req.file.filename;
        console.log(req.file.patch,"aqui esta el path uwu")
        const result = await createPlato(nombre_plato, descripcion, precio, imagen, tipo_plato);
        console.log(imagen, "imagen path desde rutas")
        res.status(200).json({
            message: 'Creación exitosa 🎉',
            result
        });
    } catch (error) {
        console.error("Error al crear plato", error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

expressApp.use('/public', express.static(join(CURRENT_DIR,'../uploads')))

router.post('/agregarpedido', agregarPedido)
router.patch('/actualiza/:id', updatePlato);//ruta para actualizar un plato
router.delete('/elimina/:id', deletePlato)//ruta para eliminar un plato 
router.get('/platosSancocho', PlatosSancocho)//mapeo plato sancocho
router.get('/platosCorriente', PlatosCorriente)//mapeo plato corriente
router.get('/bebidas', Bebidas)
router.get('/plato/:id',obtenerPlato)
router.get('/bebida/:id', obtenerBebida)
router.get('/compras',Compra)
router.delete('/agrega_comida/:id_plato', deletePlatoCarrito)

//informacion

router.get('/informacion', informacion)

//Tabla reserva

router.get('/reservaciones', getReservas);//ruta para traer todas las reservas
router.get('/reservacion/:id', getReserva);//ruta para traer una reservacion por id
router.post('/crea', createReservation);//ruta para crear una reservacion 
router.delete('/delete/:id', deleteReservation);//ruta para eliminar una reservacion
router.patch('/update/:id', updateReservation);//ruta para actualizar una reservacion

//Tabla de domicilios

router.post('/domicilio', createDomicilio); //ruta para crear domicilios
router.get('/domicilios', getDomicilios); //ruta para obtener todos los domicilios
router.get('/domicilio/:id', getDomicilio); //ruta para obtener un domicilio por id
router.delete('/quitar/:id', deleteDomicilio); //ruta para eliminar domicilio
router.patch('/modificar/:id', updateDomicilio); //ruta para actualizar un domicilio

router.get('/mesa/:id', getMesa);

export default router
