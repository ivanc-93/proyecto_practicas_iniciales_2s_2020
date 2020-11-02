import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import {Usuario}from '../Modelos/Usuario';
import {Injectable} from "@angular/core"
import {Observable,of, throwError } from 'rxjs';
import {catchError}from 'rxjs/operators'
@Injectable()

export class usuarioServicio{
    constructor(private http:HttpClient){

    }

    agregarUsuario(carne:number,nombres:string,apellidos:string,password:string,correo:string){
        var data: Usuario=new Usuario(carne,nombres,apellidos,password,correo)
        console.log('lo que se esta mandando es: '+data.Nombres)
        return this.http.post<Usuario>('http://localhost:4000/agregarUsuario',data,{
            headers:new HttpHeaders({
                'Content-Type':'application/json'
            })
        }).pipe(catchError(err=>{
            console.error('Error: '+err)
            return throwError(err)
        }))
    }

    validarCredenciales(carne:number, password: string) {
        return this.http.post('http://localhost:4000/validarCredenciales', {
            carne: carne,
            password: password,

        });
    }

    CambioPassword(carne:number, password: string) {
        return this.http.post('http://localhost:4000/CambioPassword', {
            carne: carne,
            password: password,
        });
    }

    validarCorreo(carne:number, correo:string) {
        return this.http.post('http://localhost:4000/validarCorreo', {
            carne: carne,
            correo: correo,

        });
    }

    obtenerUsuarios():Observable<Usuario[]>{
        return this.http.get<Usuario[]>('http://localhost:4000/obtenerUsuarios');
    }
}