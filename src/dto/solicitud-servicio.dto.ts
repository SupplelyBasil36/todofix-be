export class CreateSolicitudServicioDto {
  idSolicitud: number;
  FK_idUsuario?: number;
  FK_idTrabajador?: number;
  FK_idServicio?: number;
  Fecha_solicitud: Date;
  Estado: string;
  Metodo_Pago?: string;
  Fecha_programada?: Date;
}
