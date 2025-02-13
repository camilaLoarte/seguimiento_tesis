//vamos a utilizar las consultas a nuestro backend para todos 
//los recursos del seguimiento de tesis
//1. colocamos la ruta del api
const API_URL = 'http://localhost:8081/api';

//2. Creamos los metodos Api

export const tesistasService = {
    async getAllTesistas() {
        console.log('Intentando acceder a: ', API_URL);
        const response = await fetch(`${API_URL}/tesistas`);

        //vamos a crear unas acciones de depuracion
        console.log('Estado de la respuesta: ', response.status);
        console.log('Heades: ', Object.fromEntries(response.headers));

        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        const data = await response.json();
        console.log('Respuesta obtenida de getAllTesistas: ', data);
        //validar la estructura json para presentar en el frontend
        if (!data || !Array.isArray(data.data)) {
            console.error('Error en la estructura de la respuesta', data);
            throw new Error('Error en la estructura de la respuesta');
        }
        return data;
    
    }
}