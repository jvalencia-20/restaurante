import axios from "axios";

const baseUrl = "http://localhost:3002/api"; 

const fetchAllMesaData = async () => {
    try {
        const response = await axios.get(baseUrl);
        console.log("All mesa data:", response.data); 
        return response.data;
    } catch (error) {
        console.error('Error fetching mesa data:', error);
        throw error;
    }
};

const fetchMesaDataById = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/mesa/${id}`);
        console.log(`Mesa data for ID ${id}:`, response.data); 
        return response.data;
    } catch (error) {
        console.error(`Error fetching mesa data with ID ${id}:`, error);
        throw error;
    }
};



const mesaFunctions = {
    getAllMesa: fetchAllMesaData,
    getMesa: fetchMesaDataById,
    createMesa: async (id_mesa, producto, cantidad, precio) => {
        const response = await axios.post(baseUrl, {
            id_mesa,
            producto,
            cantidad,
            precio,
        });
        console.log("Created mesa:", response.data);
        return response.data;
    },    
};

export default mesaFunctions;