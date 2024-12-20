import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuarioDto } from 'src/dto/usuario.dto';
import { Usuario } from 'src/entities/usuario.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'; // Importa bcrypt para comparar la contraseña
import { Trabajador } from 'src/entities/trabajador.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Trabajador)
    private readonly trabajadorRepository: Repository<Trabajador>,
  ) {}

  async postData(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const { Contrasea } = createUsuarioDto;

    // Encriptamos la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(Contrasea, 10);

    // Creamos el nuevo usuario con la contraseña encriptada
    const newUser = this.usuarioRepository.create({
      ...createUsuarioDto,
      Contrasea: hashedPassword,
    });

    return this.usuarioRepository.save(newUser);
    
  }

  getUsers() {
    return this.usuarioRepository.find();
  }

  getUser(idUsuario: number) {
    return this.usuarioRepository.findOne({
      where: {
        idUsuario,
      },
    });
  }

  deleteUser(idUsuario: number) {
    return this.usuarioRepository.delete({ idUsuario });
  }

  async findByEmail(email: string): Promise<Usuario> {
    let user = await this.usuarioRepository.findOne({
      where: { Correo: email },
    });
    return user;
  }
}
