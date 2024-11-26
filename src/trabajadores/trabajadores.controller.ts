import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TrabajadoresService } from './trabajadores.service';
import { CreateTrabajadorDto } from 'src/dto/trabajador.dto';
import { Trabajador } from 'src/entities/trabajador.entity';

@Controller('trabajadores')
export class TrabajadoresController {
  constructor(private readonly trabajadoresService: TrabajadoresService) {}
  @Post()
  async create(
    @Body() createTrabajadorDto: CreateTrabajadorDto,
  ): Promise<Trabajador> {
    return await this.trabajadoresService.postData(createTrabajadorDto);
  }

  @Get()
  getUsers() {
    return this.trabajadoresService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number): Promise<Trabajador> {
    return this.trabajadoresService.getUser(id);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    this.trabajadoresService.deleteUser(id);
  }
}
