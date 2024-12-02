import { Injectable, NotFoundException } from '@nestjs/common';
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
    file: Express.Multer.File,
  ): Promise<Servicio> {
    // Verificar si el trabajador existe
    const trabajador = await this.trabajadorRepository.findOne({
      where: { idTrabajador },
    });

    if (!trabajador) {
      throw new NotFoundException('Trabajador no encontrado');
    }

    // Crear el nuevo servicio con el archivo
    const servicio = this.servicioRepository.create({
      ...createServicioDto,
      trabajador,
      Imagen: file?.filename, // Guardar el nombre del archivo
    });

    // Guardar el servicio en la base de datos
    return this.servicioRepository.save(servicio);
  }

  getServicios() {
    return this.servicioRepository.find();
  }

  async getServicio(idServicio: number) {
    const servicio = await this.servicioRepository.findOne({
      where: {
        idServicio,
      },
      relations: ['trabajador', 'solicitudservicio'],
    });
    if (!servicio) {
      throw new NotFoundException(
        `Servicio con id ${idServicio} no encontrado`,
      );
    }

    const imagenUrl = `${process.env.HOST_URL}/uploads/${servicio.Imagen}`;

    return {
      ...servicio,
      imagenUrl, // Agregar la URL de la imagen a la respuesta
    };
  }

  async getServicioTrabajador(idTrabajador: number) {
    const servicio = await this.servicioRepository.find({
      where: {
        trabajador: { idTrabajador },
      },
      relations: ['trabajador', 'solicitudservicio'],
    });
    if (!servicio) {
      throw new NotFoundException(
        `Servicio con id ${idTrabajador} no encontrado`,
      );
    }

    const serviciosConImagenes = servicio.map((servicio) => ({
      ...servicio,
      imagenUrl: `${process.env.HOST_URL}/uploads/${servicio.Imagen}`, // Aquí iteramos sobre cada servicio
    }));
  
    return serviciosConImagenes;
  }

  deleteServicio(idServicio: number) {
    return this.servicioRepository.delete({ idServicio });
  }
}
