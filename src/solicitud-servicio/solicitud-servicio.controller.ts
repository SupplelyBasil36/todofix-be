import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { SolicitudServicio } from 'src/entities/solicitud-servicio.entity';
import { SolicitudServicioService } from './solicitud-servicio.service';

@Controller('solicitud-servicio')
export class SolicitudServicioController {
    constructor(private readonly solicitudservicioService: SolicitudServicioService){}

    @Post(':idServicio/:idTrabajador/:idUsuario')
    async create(
        @Param('idServicio') idServicio: number,
        @Param('idTrabajador') idTrabajador: number,
        @Param('idUsuario') idUsuario: number, 
        @Body() createSolSer: Partial<SolicitudServicio>, 
    ): Promise<SolicitudServicio>{
        return this.solicitudservicioService.postData(idServicio, idTrabajador, idUsuario, createSolSer)
    }

    @Get(':id')
    getSolSer(@Param('id', ParseIntPipe) id: number): Promise<SolicitudServicio>{
        return this.solicitudservicioService.getSolSer(id);
    }

    @Get('usuario/:id')
    getSolSerUsuario(@Param('id', ParseIntPipe) id: number){
        return this.solicitudservicioService.getSolSerUsuario(id);
    }

}
