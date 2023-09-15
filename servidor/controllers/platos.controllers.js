import {pool} from "../db.js"

export const Bebidas = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM bebida')
        res.send(rows)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export const agregarPedido = async (req, res) => {
    try {
        const {id_plato, nombre_plato, cantidad, precio} = req.body;
        const [rows] = await pool.query('INSERT INTO agrega_comida (id_plato, nombre_plato, cantidad, precio) VALUES(?,?,?,?)',[id_plato, nombre_plato, cantidad, precio]);
        res.send({
            id_plato: rows.insertId,
            nombre_plato,
            cantidad,
            precio,
        })
    } catch (error) {
        res.status(500).json({ error: error.message });   
    }
}

//muestra la informacion de un plato en especifico en otra vista
export const obtenerPlato = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query('SELECT * FROM plato WHERE id_plato = ?', [id]);
        
        if (rows.length === 0) {
            res.status(404).json({ error: 'Plato no encontrado' });
        } else {
            res.json(rows[0]); // Acceder al primer resultado en la matriz
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerBebida = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query('SELECT * FROM bebida WHERE id_bebida = ?', [id]);
        if (rows.length === 0) {
            res.status(404).json({ error: 'Plato no encontrado' });
        } else {
            res.json(rows[0]); // Acceder al primer resultado en la matriz
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const Compra = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM agrega_comida')
        res.send(rows)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

// mapeo de Platos solo sancochos
export const PlatosSancocho = async (req, res) => {
    const sancocho = "sancocho"
    try {
        const [rows] = await pool.query('SELECT * FROM plato WHERE tipo_plato = ?',[sancocho])
        res.send(rows)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export const PlatosCorriente = async (req, res) => {
    const corriente = "corriente"
    try {
        const [rows] = await pool.query('SELECT * FROM plato WHERE tipo_plato = ?',[corriente])
        res.send(rows)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export const createPlato = async (nombre_plato, descripcion, precio, imagePath, tipo_plato) => {
    try {
        const query = "INSERT INTO plato (nombre_plato, descripcion, precio, imagen, tipo_plato) VALUES (?, ?, ?, ?, ?)";
        const values = [nombre_plato, descripcion, precio, imagePath, tipo_plato];
        const [rows] = await pool.query(query, values);
        return rows;
    } catch (error) {
        throw error;
    }
};

//logica para eliminar un Plato
export const deletePlato = async(req,res) => {
    try {
        const [result] = await pool.query('DELETE FROM plato WHERE id_plato = ?' ,[req.params.id]);
        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: 'plato no existente o nulo '
            
            });
        }
        res.status(200).json({
            message: 'Plato eliminado'
        });
        
    } catch (error) {
        res.status(500).json({message:"Error de servidor"});
    }
}

export const deleteBebida = async(req,res) => {
    try {
        const [result] = await pool.query('DELETE FROM bebida WHERE id_bebida = ?' ,[req.params.id]);
        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: 'bebida no existente o nulo '
            
            });
        }
        res.status(200).json({
            message: 'Bebida eliminada'
        });
        
    } catch (error) {
        console.error('Error al eliminar bebida:', error);
        res.status(500).json({message:"Error de servidor"});
    }
}

//logica para actualizar un plato
export const updatePlato = async(req,res) => {
    try {
        const {id} = req.params;
        const {nombre_plato, descripcion, precio, imagen} = req.body;
        const query = "UPDATE plato SET nombre_plato = ? , descripcion = ? , precio = ? , imagen = ? WHERE id_plato = ?";
        const values = [nombre_plato, descripcion, precio, imagen, id];
        const [result] = await pool.query(query,values);
        if (result.affectedRows === 0) {
            return res.status(404).json({
            message: 'plato no encontrado'
            });
        }
        const [rows] = await pool.query('SELECT * FROM plato WHERE id_plato = ?', [id])
        res.json(rows[0])
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" });
        
    }
}

export const informacion = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM informacion')
        res.send(rows)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export const getAllPlatos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM plato')
        res.send(rows)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export const createBebida = async (nombre_bebida, descripcion, precio, imagePath, colores) => {
    try {
        const query = "INSERT INTO bebida (nombre_bebida, descripcion, precio, imagen,  colores) VALUES (?, ?, ?, ?, ?)";
        const values = [nombre_bebida, descripcion, precio, imagePath, colores];
        const [rows] = await pool.query(query, values);
        return rows;
    } catch (error) {
        throw error;
    }
};