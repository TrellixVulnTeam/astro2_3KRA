const express= require('express');
const app = express();
require('dotenv').config();
const Port = process.env.PORT || 8080;
const mysql2= require('mysql2');
const path = require('path');
const { error } = require('console');

const conexion = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "Holasofe09!",
    port: 3306,
    database: "astro",
});

const conectar = (
    conexion.connect((error)=>{
        if(error) throw error;
        console.log('base de datos conectada!!!');
    })
    ); 


    app.use(express.json());

    app.use(express.static(path.join(__dirname,"./pages/contacto.html")));
    
    app.use(express.urlencoded({extended:false}));
    app.get('/', (req, res) =>{

        console.log(__dirname);
    
        res.sendFile('./public/index.html', 
        {root: __dirname + './pages/contacto.html'});
        
    });

    app.get('./pages/contacto.html', (req, res) => {
        res.render('./pages/contacto.html', {titulo:'formulario para completar'});

    });

    app.post('./pages/contacto.html', (req, res) => {
        console.log(req.body);


        const {nombre, apellido, fechanac, email, motivo} = req.body;
        console.log(nombre);
        console.log(apellido);
        console.log(fechanac);
        console.log(email);
        console.log(motivo);
        

        //validacion 

        if(nombre == "" || fechanac == "" || email == ""){
            let validacion = 'Faltan datos para finalizar';

            res.render('./index.html', {titulo:'envianos tu consulta'},
            validacion
            
            )}else{
                console.log(nombre, apellido, fechanac, email, motivo)
                res.send('./index.html', {titulo:'Gracias!'});
            }

        //conexion a la base de datos "astro"
        let data = {
            nombre:nombre,
            apellido:apellido,
            fechanac:fechanac,
            email:email,
            motivo:motivo
        };
        let sql= "INSERT INTO UTN SET ?"

        let query = conexion.query (sql, data, (err, results) => {    
            if(error) throw error;
            
        //para que el usuario cargue datos y quede en la misma pagina:
        //tuve que comentar 1***
        res.render('./pages/contacto.html', {titulo:'rellena el formulario para tu consulta'})    
        })
    });

    app.get('./pages/contacto.html', (req, res) => {
        res.render('contacto', {titulo:'Escribenos'});

    });

    app.listen(Port, ()=>{
        console.log(`Servidor corriendo en el puerto ${Port}`);  
    });

    app.on('error', (error) => {
        console.log(`Tenemos un error: ${error}`);  
    }); 



