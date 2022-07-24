
const express = require('express');
const app = express();
require('dotenv').config();
const Port = process.env.PORT || 8080;
const mysql = require('mysql'); 
const path = require('path');


//Conectamos la app a una base de datos

const conexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORTDB,
    database: process.env.DATABASE,
});



const conectar = (
conexion.connect((error) =>{
      //  if(error) throw errorMonitor;
        console.log('Base de Datos Conectada');
})
);




//Verbo http para recibir datos
app.post('contacto', (req,res) =>{

    //Desestructuracion

    const{nombre, apellido, fechanac, email, motivo} = req.body;

    console.log(nombre);
    console.log(apellido);
    console.log(fechanac);
    console.log(correo);
    console.log(motivo);

    //validación básica
    if(nombre == "" || fechanac == "" || email == ""){
        let validacion = 'Te faltan uno o mas datos para continuar con la consulta'
        document.getElementById('validacion')
    
    }else{
        console.log(nombre);
        console.log(apellido);
        console.log(fechanac);
        console.log(correo);
        console.log(motivo);

    res.send("¡Gracias! nos estaremos comunicando a la brevedad")
    
    //otra forma es creando funciones

            //conectar()
            
            let data = {
                nombre:nombre,
                apellido:apellido,
                fechanac:fechanac,
                email:email,
                motivo:motivo
            };

            let sql = "INSERT INTO USUARIOS SET ?";

            let query = conexion.query (sql, data, (err, results) =>{
            if(err) throw err;
            res.render('./pages/contacto.html',  {titulo: 'Envianos tu consulta'})
            });
    }
});

//res.sendStatus(200).send('Tus datos han sido recibidos')
//res.send('Tus datos han sido recibidos')


app.listen(Port, ()=>{
    console.log(`Servidor corriendo en el Puerto ${Port}`);
});

app.on('error', (error) =>{
    console.log(`Tenemos un error ${error}`);
})