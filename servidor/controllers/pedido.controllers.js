import {pool} from "../db.js"

//logica para traer todos los pedidos 
export const getPedidos = async(req,res) => {
    const [rows] = await pool.query('SELECT * FROM pedido')
    res.json(rows)
}    

//logica para obtener pedidos por id
export const getPedido = async(req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM pedido  WHERE id_pedido = ?' , [req.params.id]);
        if (rows.length <= 0) {
            return res.status(404).json({error: 'pedido no encontrado'})
        }    
        res.json(rows[0]);
        
    } catch (error) {
        console.log('Error al obtener pedido:', error)
        res.status(500).json({error: 'Error en el backend'})
        
    }    
}    

//logica para crear un nuevo pedido
export const createPedido = async(req,res) => {
    try {
        const {id_pedido,id_cliente,id_plato,cantidad} =req.body
        const query = "INSERT INTO pedido (id_pedido,id_cliente,id_plato, cantidad) VALUES(?,?,?,?)";
        const values = [id_pedido,id_cliente,id_plato,cantidad];
        console.log(values)
        await pool.query(query,values);
        res.status(200).json({
            message: 'Creacion exitosa 🎉'
        });    
        
    } catch (error) {
        console.error("error al insertar pedido", error);
        res.status(500).json({error:'Error en el servidor'});
    }    
} 

//logica para eliminar un pedido
export const deletePedido = async(req,res) => {
    try {
        const [result] = await pool.query('DELETE FROM pedido WHERE id_pedido = ?' ,[req.params.id]);
        
        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: 'Pedido no encontrado o nulo'
            });    
        }    
        res.status(200).json({
            message: 'pedido eliminado 🎉'
        })    
    } catch (error) {
        console.error('Error al eliminar pedido:', error);
        res.status(500).json({message:"Error de servidor"});
        
    }    
}    

//logica para actualizar un pedido
export const updatePedido = async(req,res) => {
    try {
        const {id} = req.params;
        const {cantidad} = req.body;
        console.log("valores recibidos:", id,cantidad);
        const query = "UPDATE pedido SET cantidad = ? WHERE id_pedido = ?";
        const values = [cantidad, id];
        console.log(values)
        const [result] = await pool.query(query,values);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'Pedido no encontrado'
            });    
        }    
        const [rows] = await pool.query('SELECT * FROM pedido WHERE id_plato = ?' , [id])
        res.json(rows[0])
    } catch (error) {
        console.error("Ups al actualizar:", error);
        res.status(500).json({ message: "Error en el servidor" });
        
    }    
}    
