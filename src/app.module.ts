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
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql.railway.internal',
      port: 3306,
      username: 'root',
      password: 'xVxQeYFOXZIXxqLNfbMhmFNHgXPJHnAn',
      database: 'railway',
      entities: [join(__dirname, '**', '*.entity{.ts,.js}')],  
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads'
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
