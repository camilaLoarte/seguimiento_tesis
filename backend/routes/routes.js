//Llamamos la librerias de javascript
const express = require("express");
const router = express.Router();
const db = require('../db/database.js');

//crear una conexion a la base de datos para verificar si la conexion esta correcta
router.get('/test', async(req, res) => {
    try{
        const [rows] = await db.query('SELECT * FROM tesis');
        res.json({
            message: "Conectado a la base de datos",
            timestamp: rows[0].tesis
        });
    }catch(error){
        console.log("Error al conectar a la base de datos",error);
        res.status(500).json({
            message: "Error en la conexion",
            error: error
        })
    }
})

//realizamos las consultas a la base de datos del proyecto y gestionar
// todos los recursos del seguimiento tesis

router.get('/tesis', async(req, res) => {
    try{
        const [tesis] = await db.query('SELECT * FROM tesis');
        res.json({
            status: "success",
            data: tesis
        });
    }catch(error){
        console.log("Error en la conexion",error);
        res.status(500).json({
            message: "Error en la conexion",
            error: error
        })
    }
})

router.get('/tesistas', async(req, res) => {
    try{
        const [tesistas] = await db.query('SELECT * FROM tesistas');
        res.json({
            status: "success",
            data: tesistas
        });
    }catch(error){
        console.log("Error en la conexion",error);
        res.status(500).json({
            message: "Error en la conexion",
            error: error
        })
    }
})
module.exports = router;