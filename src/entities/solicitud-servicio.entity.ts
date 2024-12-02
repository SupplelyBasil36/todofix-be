import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Servicio } from './servicios.entity';
import { Trabajador } from './trabajador.entity';
import { Usuario } from './usuario.entity';

@Entity('Solicitud_servicio')
export class SolicitudServicio {
  @PrimaryGeneratedColumn()
  idSolicitud: number;

  @Column({ nullable: true })
  FK_idUsuario?: number;

  @Column({ nullable: true })
  FK_idTrabajador?: number;

  @Column({ nullable: true })
  FK_idServicio?: number;

  @Column('datetime')
  Fecha_solicitud: Date;

  @Column({ length: 50 })
  Estado: string;

  @Column({ length: 50, nullable: true })
  Metodo_Pago?: string;

  @Column('datetime', { nullable: true })
  Fecha_programada?: Date;

  @ManyToOne(() => Trabajador, (trabajador) => trabajador.historial)
  @JoinColumn({name: 'FK_idTrabajador'})
  trabajador: Trabajador;

  @ManyToOne(() => Servicio, (servicio) => servicio.historial)
  @JoinColumn({name: 'FK_idServicio'})
  servicio: Servicio;

  @ManyToOne(() => Usuario, (usuario) => usuario.historial)
  @JoinColumn({name: 'FK_idUsuario'})
  usuario: Usuario;


}