import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Servicio } from 'src/entities/servicios.entity';
import { Trabajador } from 'src/entities/trabajador.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiciosService {
  constructor(
    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>,
    @InjectRepository(Trabajador)
    private readonly trabajadorRepository: Repository<Trabajador>,
  ) {}

  async postData(
    idTrabajador: number,
    createServicioDto: Partial<Servicio>,
  ): Promise<Servicio> {
    const trabajador = await this.trabajadorRepository.findOne({
      where: { idTrabajador },
    });

    if (!trabajador) {
      throw new Error('Trabajador no encontrado');
    }

    const servicio = this.servicioRepository.create({
      ...createServicioDto,
      trabajador,
    });
    return this.servicioRepository.save(servicio);
  }

  getServicios() {
    return this.servicioRepository.find();
  }
  
  getServicio(idServicio: number) {
    return this.servicioRepository.findOne({
      where: {
        idServicio,
      },
      relations: ['trabajador', 'solicitudservicio']
    });
  }

  deleteServicio(idServicio: number) {
    return this.servicioRepository.delete({ idServicio });
  }
}
