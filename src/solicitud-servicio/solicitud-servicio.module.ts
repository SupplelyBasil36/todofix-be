import { Module } from '@nestjs/common';
import { SolicitudServicioController } from './solicitud-servicio.controller';
import { SolicitudServicioService } from './solicitud-servicio.service';
import { Usuario } from 'src/entities/usuario.entity';
import { SolicitudServicio } from 'src/entities/solicitud-servicio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servicio } from 'src/entities/servicios.entity';
import { Trabajador } from 'src/entities/trabajador.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SolicitudServicio,
      Servicio,
      Trabajador,
      Usuario,
    ]),
  ],
  controllers: [SolicitudServicioController],
  providers: [SolicitudServicioService],
})
export class SolicitudServicioModule {}
