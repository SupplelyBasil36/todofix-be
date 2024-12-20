import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTrabajadorDto } from 'src/dto/trabajador.dto';
import { Trabajador } from 'src/entities/trabajador.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TrabajadoresService {
  constructor(
    @InjectRepository(Trabajador)
    private readonly trabajadorRepository: Repository<Trabajador>,
  ) {}

  async postData(createTrabajadorDto: CreateTrabajadorDto): Promise<Trabajador> {
    const { Contrasea } = createTrabajadorDto;

    // Encriptamos la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(Contrasea, 10);

    // Creamos el nuevo usuario con la contraseña encriptada
    const newUser = this.trabajadorRepository.create({
      ...createTrabajadorDto,
      Contrasea: hashedPassword,
    });

    return this.trabajadorRepository.save(newUser);
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

  async findByEmail(email: string): Promise<Trabajador> {
    let user = await this.trabajadorRepository.findOne({
      where: { Correo: email },
    });
    return user;
  }

}
