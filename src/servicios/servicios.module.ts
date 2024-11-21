import { Module } from '@nestjs/common';
import { ServiciosController } from './servicios.controller';
import { ServiciosService } from './servicios.service';
import { Servicio } from 'src/entities/servicios.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trabajador } from 'src/entities/trabajador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Servicio, Trabajador])],
  controllers: [ServiciosController],
  providers: [ServiciosService],
})
export class ServiciosModule {}
