import { Component, OnInit } from '@angular/core';
import {NgForm}from '@angular/forms'
import {usuarioServicio}from '../../servicios/usuarioServicio'
import {Router} from '@angular/router'

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  constructor(private servicioUsuario:usuarioServicio,private _router:Router) { }

  ngOnInit(): void {
  }

  registrarUsuario(form:NgForm){
    var carne: number=form.value.carne
    var nombres: string=form.value.nombres
    var apellidos: string=form.value.apellidos
    var correo: string=form.value.correo
    var password: string=form.value.password
    

    this.servicioUsuario.agregarUsuario(carne,nombres,apellidos,password,correo).subscribe((result)=>
      console.log(result)
    )

    alert('Se ha registrado con exito!')
    this._router.navigate(['login']);


  }
  

}
