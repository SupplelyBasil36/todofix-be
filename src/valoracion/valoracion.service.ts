import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Trabajador } from 'src/entities/trabajador.entity';
import { Valoracion } from 'src/entities/valoracion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ValoracionService {
  constructor(
    @InjectRepository(Valoracion)
    private readonly valoracionRepository: Repository<Valoracion>,
    @InjectRepository(Trabajador)
    private readonly trabajadorRepository: Repository<Trabajador>,
  ) {}

  async postData(
    idTrabajador: number,
    createValoracionDto: Partial<Valoracion>,
  ): Promise<Valoracion> {
    const trabajador = await this.trabajadorRepository.findOne({
      where: { idTrabajador },
    });

    if (!trabajador) {
      throw new Error('Trabajador no encontrado');
    }

    const servicio = this.valoracionRepository.create({
      ...createValoracionDto,
      trabajador,
    });
    return this.valoracionRepository.save(servicio);
  }

  getValoracion(idValoracion: number) {
    return this.valoracionRepository.findOne({
      where: {
        idValoracion,
      },
    });
  }
}
