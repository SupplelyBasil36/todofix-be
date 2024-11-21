import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Trabajador } from './trabajador.entity';

@Entity('Valoracion')
export class Valoracion {
  @PrimaryGeneratedColumn()
  idValoracion: number;

  @Column({ nullable: true })
  FK_idTrabajador?: number;

  @Column('int', { nullable: true })
  Calificacion?: number;

  @Column('text', { nullable: true })
  Comentarios?: string;

  @Column('date', { nullable: true })
  Fecha?: Date;

  @ManyToOne(() => Trabajador, (trabajador) => trabajador.servicio)
  @JoinColumn({ name: 'FK_idTrabajador' })
  trabajador: Trabajador;

  
}