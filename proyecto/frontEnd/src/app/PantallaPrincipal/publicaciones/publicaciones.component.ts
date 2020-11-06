import { Component, OnInit } from '@angular/core';
import{Publicacion} from '../../Modelos/Publicacion'
import {usuarioServicio} from '../../servicios/usuarioServicio'

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor(private servicio:usuarioServicio) { }

  publicaciones:Publicacion[]=[];

  ngOnInit(): void {

    this.servicio.obtenerPublicaciones().subscribe(publicaciones=>this.publicaciones=publicaciones);


  }

}
