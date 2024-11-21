export class CreateTrabajadorDto {
  idTrabajador: number;
  Nombre: string;
  ApellidoP: string;
  ApellidoM: string;
  Telefono: string;
  Direccion?: string;
  Correo: string;
  Contrasea: string;
  Ciudad?: string;
  Calificacion?: number;
  Estado?: string;
}
