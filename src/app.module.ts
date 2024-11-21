import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ServiciosModule } from './servicios/servicios.module';
import { HistorialModule } from './historial/historial.module';
import { SolicitudServicioModule } from './solicitud-servicio/solicitud-servicio.module';
import { TrabajadoresModule } from './trabajadores/trabajadores.module';
import { ValoracionModule } from './valoracion/valoracion.module';
import { join } from 'path'; // Importa 'join' para trabajar con rutas

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'todofix',
      entities: [join(__dirname, '**', '*.entity{.ts,.js}')],  // Ajuste aquí
      synchronize: false,
    }),
    UsuariosModule,
    ServiciosModule,
    HistorialModule,
    SolicitudServicioModule,
    TrabajadoresModule,
    ValoracionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
