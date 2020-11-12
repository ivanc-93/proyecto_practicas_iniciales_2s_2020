import {Router} from '@angular/router'
import { Component, OnInit } from '@angular/core';
import {usuarioServicio} from '../servicios/usuarioServicio';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {
  Nombres:String;
  Apellidos:String;
  Correo:String;
  
  
  constructor(private router_:Router, private servicio:usuarioServicio) { }
  filterPost='';

  

  ngOnInit(): void {

    


  }

}

