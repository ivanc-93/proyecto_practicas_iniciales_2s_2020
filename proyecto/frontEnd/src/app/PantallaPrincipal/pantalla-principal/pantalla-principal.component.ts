import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {Usuario} from '../../Modelos/Usuario'
import {usuarioServicio} from '../../servicios/usuarioServicio'
@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {
  curso:String;
  usuarios:Usuario[]=[];
  

  constructor(private router_:Router, private servicio:usuarioServicio) { }

  ngOnInit(): void {
    this.servicio.obtenerUsuarios().subscribe(usuarios=> this.usuarios=usuarios)
  }

  salir(){
    this.router_.navigate(['login'])

  }

}
