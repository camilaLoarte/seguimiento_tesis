const mysql = require("mysql2");
require('dotenv').config();
//crear la conexion con la base de datos
const mysqlPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

//vamos a convertir todas las consultas en promesas
const mysqlPromise = mysqlPool.promise();
//exportar el metodo mysqlPool para toda la estructura del backend
module.exports = mysqlPromise;

//tengan la configuracion para postgres
//const (pool) = require('pg');
//user: process.env.DB_USER,    
//password: process.env.DB_PASSWORD,
//database: process.env.DB_DATABASE
//host: process.env.DB_HOST

