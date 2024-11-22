import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Historial } from './historial.entity';
import { SolicitudServicio } from './solicitud-servicio.entity';

@Entity('Usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  idUsuario: number;

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

  @OneToOne(() => Historial, (historial) => historial.usuario)
  historial: Historial[];

  @OneToMany(() => SolicitudServicio, (solicitudservicio) => solicitudservicio.usuario)
  solicitudservicio: SolicitudServicio[];
}
