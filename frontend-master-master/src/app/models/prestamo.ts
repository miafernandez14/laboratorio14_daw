export class Prestamo {

  _id?: string;
  socio: string;
  copia: string;
  fechaPrestamo?: Date;
  fechaDevolucion: Date;
  entregado?:Boolean;


  constructor(socio:string, copia:string, fechaDevolucion: Date){
      this.socio = socio;
      this.copia = copia;
      this.fechaDevolucion = fechaDevolucion;
  }

}