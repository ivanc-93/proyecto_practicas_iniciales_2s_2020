import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {NgForm}from '@angular/forms'
import {usuarioServicio}from '../../servicios/usuarioServicio'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router,private servicioUsuario:usuarioServicio) {
    
   }

  ngOnInit(): void {
  }



  cambiarComponente(){
    //alert('va a cambiar')
    this._router.navigate(['registrarse']);
  }

  iniciarSesion(form:NgForm){
   
    var carne: number=form.value.carne
    var password: string=form.value.password

    this.servicioUsuario.validarCredenciales(carne, password).subscribe(
      res => {
        var respuesta: string = res["inicio"];
        console.log("respuesta" + respuesta);
        if (respuesta == "1") {
          console.log("hora 7:35 ");
          alert('Bienvenido')
          this._router.navigate(['pantallaPrincipal']);

          //console.log("ha ingresado correctamente");
        } else {
          alert("Credenciales invalidas");
        }
      }, (error) => {
        console.error(error);
      },
    );
  }
}
