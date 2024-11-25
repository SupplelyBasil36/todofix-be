import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/entities/usuario.entity';
import { AuthController } from './authusuarios.controller';
import { Trabajador } from 'src/entities/trabajador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Trabajador])],
  controllers: [UsuariosController, AuthController],
  providers: [UsuariosService]
})
export class UsuariosModule {}
