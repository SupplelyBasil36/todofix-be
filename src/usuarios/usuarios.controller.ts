import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateUsuarioDto } from 'src/dto/usuario.dto';
import { UsuariosService } from './usuarios.service';
import { Usuario } from 'src/entities/usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return this.usuariosService.postData(createUsuarioDto);
  }

  @Get()
  getUsers() {
    return this.usuariosService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
    return this.usuariosService.getUser(id);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    this.usuariosService.deleteUser(id);
  }
}
