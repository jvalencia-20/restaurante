import { pool } from "../db.js";

export const getMesa = async (req, res) => {
    try {
        const id_mesa = parseInt(req.params.id)
        const query = `
            SELECT * FROM orden
            WHERE id_mesa = ?
        `;
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
    const id_mesa = parseInt(req.params.id_mesa);
    try {
        const deleteQuery = `
            DELETE FROM orden
            WHERE id_mesa = ?
        `;
        const result = await pool.query(deleteQuery, [id_mesa]);
        if (result.affectedRows > 0) {
            res.status(204).send(); 
        } else {
            console.error(`No se encontraron registros con id_mesa ${id_mesa} para eliminar.`);
            res.status(404).send(); 
        }
    } catch (error) {
        console.error(`Error al eliminar la orden con id_mesa ${id_mesa}: ${error.message}`);
        res.status(500).json({ error: error.message }); 
    }
};
