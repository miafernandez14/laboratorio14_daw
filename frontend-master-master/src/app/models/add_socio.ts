export class Add_Socio {

    _id?: number;
    username: string;
    email:string;
    password?: string;
    direccion:string;
    telefono:number;
    fechaCreacion?:Date;
    directorFavorito:string;
    actorFavorito:string;
    generoPreferido:string;
    prestamo?:[];

    constructor(username:string, email:string, password:string, direccion:string,  telefono:number,  directorFavorito:string, actorFavorito:string, generoPreferido:string ){
        this.username = username;
        this.email = email;
        this.password = password;
        this.direccion = direccion;
        this.telefono = telefono;
        this.directorFavorito = directorFavorito;
        this.actorFavorito = actorFavorito;
        this.generoPreferido = generoPreferido;
    }

}