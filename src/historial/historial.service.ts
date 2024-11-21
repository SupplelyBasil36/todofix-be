import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Historial } from 'src/entities/historial.entity';
import { Servicio } from 'src/entities/servicios.entity';
import { Trabajador } from 'src/entities/trabajador.entity';
import { Usuario } from 'src/entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HistorialService {
  constructor(
    @InjectRepository(Historial)
    private readonly historialRepository: Repository<Historial>,
    @InjectRepository(Trabajador)
    private readonly trabajadorRepository: Repository<Trabajador>,
    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async postData(
    idTrabajador: number,
    idServicio: number,
    idUsuario: number,
    createHistorialDto: Partial<Historial>,
  ): Promise<Historial> {
    const trabajador = await this.trabajadorRepository.findOne({
      where: {
        idTrabajador,
      },
    });
    if (!trabajador) {
      throw new Error('Trabajador no encontrado');
    }
    const servicio = await this.servicioRepository.findOne({
      where: {
        idServicio,
      },
    });
    if (!servicio) {
      throw new Error('Trabajador no encontrado');
    }
    const usuario = await this.usuarioRepository.findOne({
      where: {
        idUsuario,
      },
    });
    if (!usuario) {
      throw new Error('Trabajador no encontrado');
    }

    const historial = this.historialRepository.create({
      ...createHistorialDto,
      trabajador,
      servicio,
      usuario,
    });

    return this.historialRepository.save(historial);
  }

  getHistorial(idHistorial: number){
    return this.historialRepository.findOne({
      where: {
        idHistorial
      },
      relations: ['trabajador', 'servicio', 'usuario']
    })
  }
}
