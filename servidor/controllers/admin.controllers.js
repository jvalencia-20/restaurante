// import {pool} from "../db.js"

// //Se seleccionan todos los registros
// export const getAdmin = async (req, res) => {
//     try {
//         const [rows] = await pool.query('SELECT * FROM admin')
//         res.json(rows)
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

// //Se selecciona un registro
// export const getAdmin1 = async (req, res) => {
//     try {
//         const { id } = req.params
//         const [rows] = await pool.query('SELECT * FROM admin WHERE id_admin = ?', [id])
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
// export const createAdmin = async (req, res) => {
//     try {
//         const {id_admin, nombre, correo, password} = req.body;
//         const [rows] = await pool.query('INSERT INTO admin (id_admin, nombre, correo, password) VALUES(?,?,?,?)',[id_admin, nombre, correo, password]);
//         res.send({
//             id_admin: rows.insertId,
//             nombre,
//             correo,
//             password
//         })
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

// //Se actualiza un registro
// export const updateAdmin = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const {nombre, correo, password} = req.body
//         const [result] = await pool.query('UPDATE admin SET nombre = IFNULL(?, nombre), correo = IFNULL(?, correo), password = IFNULL(?, password) WHERE id_admin = ?', [ nombre, correo, password, id])
//         if (result.affectedRows === 0) {
//             return res.status(404).json({
//             message: 'No encontrado'
//         });
//         }
//         const [rows] = await pool.query('SELECT * FROM admin WHERE id_admin = ?', [id])
//         res.json(rows[0])
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

// //Se elimina un registro
// export const deleteAdmin = async (req, res) => {
//     try {
//         const [result] = await pool.query('DELETE FROM admin WHERE id_admin = ?', [req.params.id])
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



