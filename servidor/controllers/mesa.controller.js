import { pool } from "../db.js";

export const getMesa = async (req, res) => {
    try {
        const id_mesa = parseInt(req.params.id)
        // const query = `
        //     SELECT * FROM orden
        //     WHERE id_mesa = ?
        // `;
        const query = "SELECT producto, SUM(cantidad) AS cantidad, SUM(precio) AS precio, id_orden, id_mesa FROM orden WHERE id_mesa = ? GROUP BY producto"
        const [rows] = await pool.query(query, [id_mesa]);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createMesa = async (req, res) => {
    try {
        const { numeroMesa, productos } = req.body;
        if (!productos || productos.length === 0) {
        res.status(400).json({ error: "No se han seleccionado productos." });
        return;
        }
        for (const producto of productos) {
            const { nombre, cantidad, precio } = producto;
            await pool.query(
            'INSERT INTO orden (id_mesa, producto, cantidad, precio) VALUES (?, ?, ?, ?)',
            [numeroMesa, nombre, cantidad, precio]
        );
        };
        res.status(200).json({ id_mesa: numeroMesa });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const deleteOrdenPorMesa = async (req, res) => {
    try {
        const id_mesa = parseInt(req.params.id_mesa);
        const deleteQuery = `
            DELETE FROM orden
            WHERE id_mesa = ?
        `;
        const deleteResult = await pool.query(deleteQuery, [id_mesa]);
        if (deleteResult.affectedRows > 0) {
            return res.status(200).json({ message: 'Registros eliminados correctamente.' });
        } else {
            return res.status(404).json({ message: 'No encontrado' });
        }
        } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};