import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Catedratico } from 'src/app/Modelos/Catedratico';
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
  catedraticos:Catedratico[]=[];
  
  constructor(private router_:Router, private servicio:usuarioServicio) { }

  ngOnInit(): void {
    this.servicio.obtenerUsuarios().subscribe(usuarios=> this.usuarios=usuarios)
    this.servicio.obtenerCatedratico().subscribe(catedraticos=> this.catedraticos=catedraticos)
  }

  salir(){
    this.router_.navigate(['login'])

  }

}
