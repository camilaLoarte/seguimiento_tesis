const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const routes = require('./routes/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.get('/api/test', (req, res) => {
//     const items = [
//         { id: 1, nombre: 'Camila', apellido: 'Loarte' },
//         { id: 2, nombre: 'Tais', apellido: 'Carreño' },
//         { id: 3, nombre: 'Ricardo', apellido: 'Alvarado' },
//         { id: 4, nombre: 'Mateo', apellido: 'Merchan' },
//     ]
//     res.json(items);
// });

app.use('/api', routes);

//ruta de bienvenida
app.get('/', (req, res) => {
    res.json({
        message: "Bienvenido al sistema de seguimiento de tesis"
    });
});


// app.use('/', (req, res) => {
//     try {
//         res.status(504).json({
//             status: "error",
//             message: "Algo salio mal"
//         })
//     } catch (error) {
//         console.error("Ruta no encontrada", error.stack);
//     }
       
// })


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor ejecutandose en el puerto ${PORT}`));

module.exports = routes;