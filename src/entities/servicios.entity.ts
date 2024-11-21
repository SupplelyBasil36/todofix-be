import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Trabajador } from './trabajador.entity';
import { Historial } from './historial.entity';
import { SolicitudServicio } from './solicitud-servicio.entity';

@Entity('Servicios')
export class Servicio {
  @PrimaryGeneratedColumn()
  idServicio: number;

  @Column({ length: 100 })
  Nombre: string;

  @Column('text', { nullable: true })
  Descripcion?: string;

  @Column({ length: 100, nullable: true })
  Categoria?: string;

  @Column('decimal', { precision: 10, scale: 2 })
  Precio_base: number;

  @ManyToOne(() => Trabajador, (trabajador) => trabajador.servicio)
  @JoinColumn({ name: 'FK_idTrabajador' })
  trabajador: Trabajador;

  @OneToOne(() => Historial, (historial) => historial.servicio)
  historial: Historial[];

  @OneToOne(
    () => SolicitudServicio,
    (solicitudservicio) => solicitudservicio.servicio,
  )
  solicitudservicio: SolicitudServicio[];
}
