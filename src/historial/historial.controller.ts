import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { HistorialService } from './historial.service';
import { Historial } from 'src/entities/historial.entity';

@Controller('historial')
export class HistorialController {
  constructor(private readonly historialService: HistorialService) {}

  @Post()
  async create(
    @Param('idTrabajador') idTrabajador: number,
    @Param('idServicio') idServicio: number,
    @Param('idUsuario') idUsuario: number,
    @Body() CreateHistorialDto: Partial<Historial>,
  ): Promise<Historial> {
    return this.historialService.postData(
      idTrabajador,
      idServicio,
      idUsuario,
      CreateHistorialDto,
    );
  }

  @Get(':id')
  getHistorial(@Param('id', ParseIntPipe) id: number){
    return this.historialService.getHistorial(id);
  }
}
