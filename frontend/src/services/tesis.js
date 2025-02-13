
const TesisService = {
    getTesis: async () => {
        try {
            const response = await fetch('http://localhost:8081/api/tesis');
            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error al obtener las tesis:", error);
            throw error; 
        }
    }
};

export default TesisService;
