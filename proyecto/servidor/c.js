var mysql=require('mysql')
const express = require("express");
const app = express();
const bodyParser=require("body-parser");
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const conexion=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345",
    database:"baseDeDatos"
});

function getprueba(){
    var miQuery="SELECT * FROM PRUEBA;"
    conexion.query(miQuery,function(err,result){
        if(err){throw err;}else{console.log(result);
        return result;}
    });
}

app.get('/prueba',(request, response)=>{
    var miQuery ='Select *from prueba;';
    conexion.query(miQuery,function(err,result){
        if(err){throw err;}else{
            //console.log(result);
            response.send(result);
        }
    });
})

app.post('/agregarUsuario', (request, response) => {
    var nombres = request.body.nombres;
    var carne = request.body.carne;
    var apellidos = request.body.apellidos;
    var password = request.body.password;
    var correo = request.body.correo;
    console.log('el nombre es:');
    console.log(nombres);
    var miQuery = "INSERT INTO Usuario (carne, nombres, apellidos,password_,correo) VALUES(" +
        carne + ", \'" + nombres + "\',\'" + apellidos +
        "\',\'" + password + "\'" + ",\'" + correo + "\');";

    console.log(miQuery);
    conexion.query(miQuery, function (err, result) {
        if (err) {
            throw err;
        } else {
            console.log(result);
            response.send(result);
            //console.log('se agrego el registro correctamente hora:11:57')

        }
    })})




app.post('/validarCredenciales', (request, response) => {
    var carne = request.body.carne;
    var password = request.body.password;

    console.log("la contrasenia es: " + password + " y el user es: " + carne);
    var miQuery = "SELECT EXISTS(" +
        "select 1" + " FROM Usuario where carne=" + carne + " and password_=" + "\'" + password + "\') as inicio;"

    conexion.query(miQuery, function (err, result) {
        if (err) {
            throw err;
        } else {


            console.log(result[0].inicio);
            response.send(result[0]);
        }
    }
    );
})






app.listen(4000, () => {
    
    console.log("backend inicializado, en el puerto 4000");
})

