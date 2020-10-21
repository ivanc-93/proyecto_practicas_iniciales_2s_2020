import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {

  constructor(private router_:Router) { }

  ngOnInit(): void {
  }

  salir(){
    this.router_.navigate(['login'])

  }

}
