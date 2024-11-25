import { Module } from '@nestjs/common';
import { TrabajadoresController } from './trabajadores.controller';
import { TrabajadoresService } from './trabajadores.service';
import { Trabajador } from 'src/entities/trabajador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Trabajador])],
  controllers: [TrabajadoresController],
  providers: [TrabajadoresService],
})
export class TrabajadoresModule {}
