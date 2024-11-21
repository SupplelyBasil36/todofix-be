import { Module } from '@nestjs/common';
import { TrabajadoresController } from './trabajadores.controller';
import { TrabajadoresService } from './trabajadores.service';
import { Trabajador } from 'src/entities/trabajador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './authtrabajadores.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Trabajador])],
  controllers: [TrabajadoresController, AuthController],
  providers: [TrabajadoresService],
})
export class TrabajadoresModule {}
