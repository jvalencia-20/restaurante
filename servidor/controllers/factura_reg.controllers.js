import {pool} from "../db.js"
import moment from "moment-timezone";

moment.tz.setDefault('America/Bogota');

//Se seleccionan todos los registros
export const getAllRegistros = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM registros_fact')
        res.json(rows)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Se selecciona solo uno
export const getRegistro = async (req, res) => {
    try {
        const { id } = req.params
        const [rows] = await pool.query('SELECT * FROM registros_fact WHERE id_num_orden = ?', [id])
        if (rows.length <= 0) {
            return res.status(404).json({
                message: 'No encontrado'
            });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getRegistroPorMesa = async (req, res) => {
    try {
        const { numeroMesa } = req.params;
        const [rows] = await pool.query('SELECT * FROM registros_fact WHERE id_mesa = ?', [numeroMesa]);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Se crea registro
export const createNew = async (req, res) => {
    try {
        const { id_mesa, productos, fecha_factura } = req.body;
        const insertIds = [];
        for (const productoData of productos) {
            const { producto, cantidad, precio } = productoData;
            const fechaFactura = moment(fecha_factura, 'DD/MM/YYYY, HH:mm:ss a').format('YYYY-MM-DD HH:mm:ss');
            const [rows] = await pool.query('INSERT INTO registros_fact (id_mesa, producto, cantidad, precio, fecha_factura) VALUES (?, ?, ?, ?, ?)', [id_mesa, producto, cantidad, precio, fechaFactura]);
            insertIds.push(rows.insertId);
        }
        res.send({
            insertIds,
            id_mesa,
            productos,
            fecha_factura,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Se actualiza registro
export const updateRegistro = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_mesa, producto, cantidad, precio } = req.body;
        const [result] = await pool.query(
            'UPDATE registros_fact SET id_mesa = IFNULL(?, id_mesa), producto = IFNULL(?, producto) cantidad = IFNULL(?, cantidad), precio = IFNULL(?, precio), WHERE id_num_orden = ?',
            [id_mesa, producto, cantidad, precio, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'No encontrado'
            });
        }
        const [rows] = await pool.query('SELECT * FROM registros_fact WHERE id_num_orden= ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Se elimina 1 registro
export const delete1 = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM registros_fact WHERE id_num_orden= ?', [req.params.id])
        if (result.affectedRows <= 0) {
            return res.status(404).json({
            message: 'No encontrado'
            });
        }
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Se eliminan todos los registros
export const deleteAllRegistro = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM registros_fact');
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getRegistrosPorMesaYFecha = async (req, res) => {
    try {
        const { mesa, fecha } = req.params;
        const formattedFecha = moment(fecha).format('YYYY-MM-DD');
        const [rows] = await pool.query('SELECT * FROM registros_fact WHERE id_mesa = ? AND DATE(fecha_factura) = ?', [mesa, formattedFecha]);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};