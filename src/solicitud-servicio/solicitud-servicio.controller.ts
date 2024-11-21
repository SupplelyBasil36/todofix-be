import { Body, Controller, Param, Post } from '@nestjs/common';
import { SolicitudServicio } from 'src/entities/solicitud-servicio.entity';
import { SolicitudServicioService } from './solicitud-servicio.service';

@Controller('solicitud-servicio')
export class SolicitudServicioController {
    constructor(private readonly solicitudservicioService: SolicitudServicioService){}

    @Post()
    async create(
        @Param('idServicio') idServicio: number,
        @Param('idTrabajador') idTrabajador: number,
        @Param('idUsuario') idUsuario: number, 
        @Body() createSolSer: Partial<SolicitudServicio>, 
    ): Promise<SolicitudServicio>{
        return this.solicitudservicioService.postData(idServicio, idTrabajador, idUsuario, createSolSer)
    }
}
