import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt'; // Importa bcrypt para comparar la contraseña
import { TrabajadoresService } from './trabajadores.service';

@Controller('auth-trabajador')
export class AuthController {
  constructor(private readonly trabajadorService: TrabajadoresService) {}

  @Post('login')
  async login(@Body() body: { Correo: string; Contrasea: string }) {
    const { Correo, Contrasea } = body;

    // Buscar el usuario por el email
    const user = await this.trabajadorService.findByEmail(Correo);

    // Si no se encuentra el usuario, lanzar un error
    if (!user) {
      throw new UnauthorizedException('Trabajador no encontrado');
    }

    // Comparar la contraseña con la guardada en la base de datos
    const isPasswordValid = await bcrypt.compare(Contrasea, user.Contrasea);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    return { user }; // Aquí puedes devolver un token si lo deseas
  }
}
