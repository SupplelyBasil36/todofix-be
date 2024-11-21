export class CreateValoracionDto {
  idValoracion: number;
  FK_idTrabajador?: number;
  Calificacion?: number;
  Comentarios?: string;
  Fecha?: Date;
}
