import {pool} from '../db.js'

//logica para crear un domicilio
export const createDomicilio = async(req,res) => {
    try {
        const {id_domicilios, nombre_cliente,direccion} = req.body;
        const query = 'INSERT INTO domicilios(id_domicilio, nombre_cliente, direccion) VALUES(?,?,?)';
        const values = [id_domicilios,nombre_cliente,direccion];
        await pool.query(query,values);
        res.status(200).json({
            message: 'domicilio hecho con exito 🎉'
        });
    } catch (error) {
        console.error('Ups error al crear domicilio');
        res.status(500).json({error: 'Error Interno'})
    }
}

//logica para obtener todos los domicilios
export const getDomicilios = async(req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM domicilios')
        res.json(rows)
    } catch (error) {
        console.error('Ups error al obtener los domicilios:', error);
        res.status(500).json({error: 'Error Interno'})
    }
}

//logica para obtener domicilios por id
export const getDomicilio = async(req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM domicilios WHERE id_domicilio = ?', [req.params.id]);
        if (rows.length <= 0) {
            return res.status(404).json({
                message: 'domicilio no encontrado..'
            });
        }
        res.json(rows[0])
        
    } catch (error) {
        console.log('Ups error al obtener domicilio:', error);
        res.status(500).json({error: 'Error Interno'});
    }
}

//eliminar domicilio
export const deleteDomicilio = async(req,res) => {
    try {
        const [result] = await pool.query('DELETE FROM domicilios WHERE id_domicilio = ?', [req.params.id]);
        
        if (result.affectedRows <= 0) {
            return res.status(404).json({message: 'El domicilio no se encuentra 😓'});
        }
        res.status(200).json({message: 'domicilio eliminado ✅'});
    } catch (error) {
        console.error('Ups error al eliminar domicilio:', error);
        res.status(500).json({message: 'Error Interno'});
    }
}

//logica para actualizar un domicilio
export const updateDomicilio = async(req,res) => {
    try {
        const {id} =req.params;
        const {nombre_cliente,direccion} = req.body;
        const query = 'UPDATE domicilios SET nombre_cliente = ?, direccion = ?  WHERE id_domicilio = ?';
        const values = [nombre_cliente,direccion,id];
        const [result] = await pool.query(query,values);
        if (result.affectedRows === 0) {
            return res.status(404).json({message: 'Elemento no existente'});
        }
        const [rows] = await pool.query('SELECT * FROM domicilios WHERE id_domicilio = ?' , [id]);
        res.status(200).json({message: 'Domicilio actualizado'})
    } catch (error) {
        console.error('Ups error al actualizar:', error);
        res.status(500).json({message: 'Error Interno'});
    }
}