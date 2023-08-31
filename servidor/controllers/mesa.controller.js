import { pool } from "../db.js";

export const getMesa = async (req, res) => {
    try {
        const mesaId = parseInt(req.params.id)
        
        const query = `
            SELECT * FROM mesa
            WHERE id_mesa = ?
        `;
        
        const [rows] = await pool.query(query, [mesaId]);
        res.json(rows);
        console.log(rows);
    } catch (error) {
        console.error('Error fetching mesa data:', error);
        res.status(500).json({ error: error.message });
    }
}