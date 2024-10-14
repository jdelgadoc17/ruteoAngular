import { Injectable } from "@angular/core"
import { Curso } from "../models/curso"
import { Observable, of } from "rxjs";


@Injectable ({
    providedIn:"root"
})


export class CursoService {

    private lista_cursos: Curso[] = [
        {id:1,  nombre_curso: "Programación", descripcion: "Aprende a programar desde cero"},
        {id:2, nombre_curso: "Diseño web", descripcion: "Aprende a diseñar sitios web"},
        {id:3, nombre_curso: "Base de datos", descripcion: "Aprende a manejar bases de datos"},
        {id:4, nombre_curso: "Desarrollo móvil", descripcion: "Aprende a desarrollar aplicaciones móviles"},
        {id:5, nombre_curso: "UX/UI", descripcion: "Aprende a diseñar interfaces de usuario"}
    ]

    constructor (){

    }

    
    getCurso(): Observable<Curso[]> {
        return of(this.lista_cursos);
    }  

    addCurso(nombre_curso:string){
        const curso:Curso={
            id:this.lista_cursos.length + 1,
            nombre_curso: nombre_curso,
            descripcion: "Curso nuevo"
        }

        this.lista_cursos.push(curso);
        return this.lista_cursos;

    }

    getCursoById(id: number): Observable<Curso | undefined> {
        const curso = this.lista_cursos.find(curso => curso.id === id);
        return of(curso);
    }

}