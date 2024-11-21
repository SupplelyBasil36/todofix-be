export class CreateUsuarioDto {
  idUsuario: number;
  Nombre: string;
  ApellidoP: string;
  ApellidoM: string;
  Telefono: string;
  Direccion?: string;
  Correo: string;
  Contrasea: string;
  Ciudad?: string;
}
