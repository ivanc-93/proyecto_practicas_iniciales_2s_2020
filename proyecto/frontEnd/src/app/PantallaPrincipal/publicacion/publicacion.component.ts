import { Component, OnInit } from '@angular/core';
import{Usuario} from '../../Modelos/Usuario'
import{usuarioServicio} from '../../servicios/usuarioServicio'
import {Observable,of, throwError } from 'rxjs';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  Nombres:string;
  Apellidos:string;
  usuarios:Usuario[]=[];


  constructor(private servicio:usuarioServicio) {
    

   }

  

  ngOnInit(): void {

    let info=JSON.parse(localStorage.getItem("info"))
    this.Nombres=info.nombres;
    this.Apellidos=info.apellidos;
    this.servicio.obtenerUsuario(parseInt(info.carneUsuario)).subscribe(usuarios=>this.usuarios=usuarios);
    console.log('termina ngonInit'+this.usuarios[0])
      
    
   
      
      
    //.subscribe(usuarios=> this.usuarios=usuarios)
    

   // alert(this.Nombres)
  }

 

}
