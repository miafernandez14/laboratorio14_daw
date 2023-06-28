export class Copia {

    _id?: string;
    pelicula: string;
    id_cinta: string;
    disponible?: boolean;

    constructor(pelicula:string, id_cinta:string){
        this.pelicula = pelicula;
        this.id_cinta = id_cinta;
    }

}