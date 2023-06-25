import { copia } from "./copia";
import { socio } from "./socio";

export interface prestamo {
    _id: string;
    socio: string;
    copia: string;
    fechaPrestamo: string;
    fechaDevolucion: string;
    entregado: boolean;
  }
