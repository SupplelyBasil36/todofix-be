import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Servicio } from './servicios.entity';
import { Historial } from './historial.entity';
import { Valoracion } from './valoracion.entity';
import { SolicitudServicio } from './solicitud-servicio.entity';

@Entity('Trabajadores')
export class Trabajador {
  @PrimaryGeneratedColumn()
  idTrabajador: number;

  @Column({ length: 100 })
  Nombre: string;

  @Column({ length: 100 })
  ApellidoP: string;

  @Column({ length: 100 })
  ApellidoM: string;

  @Column({ length: 20 })
  Telefono: string;

  @Column({ length: 255, nullable: true })
  Direccion?: string;

  @Column({ length: 100, unique: true })
  Correo: string;

  @Column({ length: 100 })
  Contrasea: string;

  @Column({ length: 100, nullable: true })
  Ciudad?: string;

  @Column({ length: 50, nullable: true })
  Estado?: string;

  @OneToMany(() => Servicio, (servicio) => servicio.trabajador)
  servicio: Servicio[];

  @OneToOne(() => Historial, (historial) => historial.trabajador)
  historial: Historial[];
  
  @OneToMany(() => Valoracion, (valoracion) => valoracion.trabajador)
  valoracion: Valoracion[];

  @OneToOne(() => SolicitudServicio, (solicitudservicio) => solicitudservicio.trabajador)
  solicitudservicio: SolicitudServicio[];
}