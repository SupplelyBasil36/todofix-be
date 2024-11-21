import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Trabajador } from './trabajador.entity';
import { Servicio } from './servicios.entity';
import { Usuario } from './usuario.entity';

@Entity('Historial')
export class Historial {
  @PrimaryGeneratedColumn()
  idHistorial: number;

  @Column({ nullable: true })
  FK_idServicio?: number;

  @Column({ nullable: true })
  FK_idTrabajador?: number;

  @Column({ nullable: true })
  FK_idUsuario?: number;

  @Column('decimal', { precision: 10, scale: 2 })
  IngresoTotal: number;

  @OneToOne(() => Trabajador, (trabajador) => trabajador.historial)
  @JoinColumn({ name: 'FK_idTrabajador' })
  trabajador: Trabajador;

  @OneToOne(() => Servicio, (servicio) => servicio.historial)
  @JoinColumn({ name: 'FK_idServicio' })
  servicio: Servicio;

  @OneToOne(() => Usuario, (usuario) => usuario.historial)
  @JoinColumn({ name: 'FK_idUsuario' })
  usuario: Usuario;
}
