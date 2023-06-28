export class Pelicula {

    _id?: string;
    titulo: string;
    genero: string;
    director: string;
    actores: number;
    copias?: [];

    constructor(titulo:string, genero:string, director: string, actores: number ){
        this.titulo = titulo;
        this.genero = genero;
        this.director = director;
        this.actores = actores;
    }

}