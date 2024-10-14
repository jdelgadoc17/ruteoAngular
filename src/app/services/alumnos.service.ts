import { Injectable } from "@angular/core"
import { Alumno } from "../models/alumno"
import { Observable, of } from "rxjs";


@Injectable ({
    providedIn:"root"
})


export class CursoService {

    private lista_alumnos: Alumno[] = [
        
    ]

    constructor (){

    }

    
    getAlumno(): Observable<Alumno[]> {
        return of(this.lista_alumnos);
    }  

    addAlumno(nombre_alumno:string){
        const alumno:Alumno={
            id:this.lista_alumnos.length + 1,
            nombre_alumno: nombre_alumno
        }

        this.lista_alumnos.push(alumno);
        return this.lista_alumnos;

    }

    getAlumnoById(id: number): Observable<Alumno | undefined> {
        const alumno = this.lista_alumnos.find(alumno => alumno.id === id);
        return of(alumno);
    }

}