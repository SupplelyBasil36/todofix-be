import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Valoracion } from 'src/entities/valoracion.entity';
import { ValoracionService } from './valoracion.service';

@Controller('valoracion')
export class ValoracionController {
  constructor(private readonly valoracionService: ValoracionService) {}
  @Post()
  async create(
    @Param('idTrabajador') idTrabajador: number,
    @Body() createValoracionDto: Partial<Valoracion>,
  ): Promise<Valoracion> {
    return this.valoracionService.postData(idTrabajador, createValoracionDto);
  }

  @Get(':id')
  getValoracion(@Param('id', ParseIntPipe) id:number): Promise<Valoracion>{
    return this.valoracionService.getValoracion(id);
  }
}
