var mysql=require('mysql')
const express = require("express");
const app = express();
const bodyParser=require("body-parser");

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





app.listen(4000, () => {
    
    console.log("backend inicializado, en el puerto 4000");
})