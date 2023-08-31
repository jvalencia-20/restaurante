// import {pool} from "../db.js"
// import bcrypt from "bcrypt"

// //Se seleccionan todos los registros
// export const getCliente = async (req, res) => {
//     try {
//         const [rows] = await pool.query('SELECT * FROM cliente')
//         res.json(rows)
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

// //Se selecciona un registro

// export const getCliente1 = async (req, res) => {
//     try {
//         const { id } = req.params
//         const [rows] = await pool.query('SELECT * FROM cliente WHERE id_cliente = ?', [id])
//         if (rows.length <= 0) {
//             return res.status(404).json({
//                 message: 'No encontrado'
//             });
//         }
//         res.json(rows[0]);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

// //Se crea un registro

// export const createCliente = async (req, res) => {
//     try {
//         const {id_cliente, nombre_cliente, correo, password, confirmar_password} = req.body;
//         const saltRounds = 10
//         const hashedPassword = await bcrypt.hash(password, saltRounds);
//         const hashedConfirmPassword = await bcrypt.hash(confirmar_password, saltRounds);
//         const validar = 'SELECT * FROM cliente WHERE nombre_cliente = ?';
//         const validarUsuario = [nombre_cliente];
//         const [usuarioExistente] = await pool.query(validar,validarUsuario)
//         console.log(usuarioExistente)
//         if(usuarioExistente.length > 0) {
//             return res.status(409).send('nombre del usuario ya existe')
//         }
//         const [rows] = await pool.query('INSERT INTO cliente (id_cliente, nombre_cliente, correo, password,confirmar_password) VALUES(?,?,?,?,?)',[id_cliente, nombre_cliente, correo, hashedPassword, hashedConfirmPassword]);
//         res.send({
//             id_cliente: rows.insertId,
//             nombre_cliente,
//             correo,
//             password,
//             confirmar_password
//         })
        
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

// export const confirmar = async (req, res) => {
//     try {
//     const { usuario, password } = req.body;
//     console.log(req.body);
//     const [rows] = await pool.query(
//         'SELECT * FROM cliente WHERE nombre_cliente = ? ', [usuario]
//     );
//     if (rows.length > 0) {
//         console.log(rows[0],"❤️❤️❤️")
//         const compassword = await bcrypt.compare(password,rows[0].password);
//         if(compassword){
//             res.status(200).json({
//                 nombre_cliente: rows[0].nombre_cliente
//                 });
//         }else{
//             res.status(400).send("el usuario no existe⭐")
//         }
//     } else {
//         res.status(400).send("El usuario no existe ❤️❤️❤️❤️❤️❤️");
//     }
//     } catch (error) {
//     res.status(500).json({ error: "Error del servidor" });
//     }
// };

// export const deletePlatoCarrito = async (req, res) => {
//     try {
//         const [result] = await pool.query('DELETE FROM agrega_comida WHERE id_plato = ?', [req.params.id_plato]);
//         if (result.affectedRows === 0) {
//             return res.status(404).json({
//                 message: 'No encontrado'
//             });
//         }
//         res.sendStatus(204);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

// //Se actualiza un registro
// export const updateCliente = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const {nombre_cliente, correo, password} = req.body
//         const [result] = await pool.query('UPDATE cliente SET nombre_cliente = IFNULL(?, nombre_cliente), correo = IFNULL(?, correo), password = IFNULL(?, password) WHERE id_cliente = ?', [nombre_cliente, correo, password, id])
//         if (result.affectedRows === 0) {
//             return res.status(404).json({
//             message: 'No encontrado'
//         });
//         }
//         const [rows] = await pool.query('SELECT * FROM cliente WHERE id_cliente = ?', [id])
//         res.json(rows[0])
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

// //Se elimina un registro
// export const deleteCliente = async (req, res) => {
//     try {
//         const [result] = await pool.query('DELETE FROM cliente WHERE id_cliente = ?', [req.params.id])
//         if (result.affectedRows <= 0) {
//             return res.status(404).json({
//             message: 'No encontrado'
//             });
//         }
//         res.sendStatus(204);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }