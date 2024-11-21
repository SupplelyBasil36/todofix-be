import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuarioDto } from 'src/dto/usuario.dto';
import { Usuario } from 'src/entities/usuario.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'; // Importa bcrypt para comparar la contraseña

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async postData(createUsuarioDto: CreateUsuarioDto): Promise<string> {
    const { Contrasea } = createUsuarioDto;

    // Encriptamos la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(Contrasea, 10);

    // Creamos el nuevo usuario con la contraseña encriptada
    const newUser = this.usuarioRepository.create({
      ...createUsuarioDto,
      Contrasea: hashedPassword,
    });

    await this.usuarioRepository.save(newUser);
    return 'Usuario creado exitosamente';
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

  async findByEmail(Correo: string): Promise<Usuario | undefined> {
    return this.usuarioRepository.findOne({
      where: { Correo },
    });
  }
}
