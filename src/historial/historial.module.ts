import { Module } from '@nestjs/common';
import { HistorialController } from './historial.controller';
import { HistorialService } from './historial.service';
import { Usuario } from 'src/entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Historial } from 'src/entities/historial.entity';
import { Servicio } from 'src/entities/servicios.entity';
import { Trabajador } from 'src/entities/trabajador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Historial, Trabajador, Servicio, Usuario])],
  controllers: [HistorialController],
  providers: [HistorialService]
})
export class HistorialModule {}
