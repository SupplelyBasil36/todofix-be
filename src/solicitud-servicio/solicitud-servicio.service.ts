import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Servicio } from 'src/entities/servicios.entity';
import { SolicitudServicio } from 'src/entities/solicitud-servicio.entity';
import { Trabajador } from 'src/entities/trabajador.entity';
import { Usuario } from 'src/entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SolicitudServicioService {
  constructor(
    @InjectRepository(SolicitudServicio)
    private readonly solicitudservicioRepository: Repository<SolicitudServicio>,
    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>,
    @InjectRepository(Trabajador)
    private readonly trabajadorRepository: Repository<Trabajador>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async postData(
    idServicio: number,
    idTrabajador: number,
    idUsuario: number,
    createSolSer: Partial<SolicitudServicio>,
  ): Promise<SolicitudServicio> {
    const servicio = await this.servicioRepository.findOne({
      where: { idServicio },
    });
    const trabajador = await this.trabajadorRepository.findOne({
      where: { idTrabajador },
    });
    const usuario = await this.usuarioRepository.findOne({
      where: { idUsuario },
    });

    const soliser = this.solicitudservicioRepository.create({
      usuario,
      trabajador,
      servicio,
      ...createSolSer,
    });

    return this.solicitudservicioRepository.save(soliser);
  }
}
