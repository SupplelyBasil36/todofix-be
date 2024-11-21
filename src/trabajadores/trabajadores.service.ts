import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTrabajadorDto } from 'src/dto/trabajador.dto';
import { Trabajador } from 'src/entities/trabajador.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TrabajadoresService {
  constructor(
    @InjectRepository(Trabajador)
    private readonly trabajadorRepository: Repository<Trabajador>,
  ) {}

  async postData(createTrabajadorDto: CreateTrabajadorDto): Promise<string> {
    const newWorker = this.trabajadorRepository.create(createTrabajadorDto);
    await this.trabajadorRepository.save(newWorker);
    return 'Trabajador creado exitosamente';
  }
  getUsers() {
    return this.trabajadorRepository.find();
  }
  getUser(idTrabajador: number) {
    return this.trabajadorRepository.findOne({
      where: {
        idTrabajador,
      },
    });
  }

  deleteUser(idTrabajador: number) {
    return this.trabajadorRepository.delete({ idTrabajador });
  }

  async findByEmail(Correo: string): Promise<Trabajador | undefined> {
    return this.trabajadorRepository.findOne({
      where: { Correo },
    });
  }
}
