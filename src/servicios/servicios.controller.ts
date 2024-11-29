import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ServiciosService } from './servicios.service';
import { Servicio } from 'src/entities/servicios.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('servicios')
export class ServiciosController {
  constructor(private readonly serviciosService: ServiciosService) {}
  @Post("/:idTrabajador")
  @UseInterceptors(FileInterceptor('Imagen'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Param('idTrabajador') idTrabajador: number,
    @Body() createServicioDto: Partial<Servicio>,
  ): Promise<Servicio> {
    return this.serviciosService.postData(idTrabajador, createServicioDto, file);
  }
  @Get()
  getServicios() {
    return this.serviciosService.getServicios();
  }

  @Get(':id')
  getServicio(@Param('id', ParseIntPipe) id: number) {
    return this.serviciosService.getServicio(id);
  }
  @Delete(':id')
  deleteServicio(@Param('id', ParseIntPipe) id: number) {
    this.serviciosService.deleteServicio(id);
  }
}
