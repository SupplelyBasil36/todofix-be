import { Module } from '@nestjs/common';
import { ValoracionController } from './valoracion.controller';
import { ValoracionService } from './valoracion.service';
import { Trabajador } from 'src/entities/trabajador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Valoracion } from 'src/entities/valoracion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Valoracion, Trabajador])],
  controllers: [ValoracionController],
  providers: [ValoracionService]
})
export class ValoracionModule {}
