import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoModule } from './producto/producto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { AlmacenModule } from './almacen/almacen.module';
import { AlertastockModule } from './alertastock/alertastock.module';
import { MovimientoModule } from './movimiento/movimiento.module';
import { RolModule } from './rol/rol.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433, // ⚠️ Usa 5433
      username: 'postgres',
      password: '12345', // 👈 la contraseña de pgAdmin
      database: 'inventario_proyecto2', // 👈 nombre exacto de tu base de datos
      autoLoadEntities: true, // Nest detecta automáticamente tus entidades
      synchronize: true, // crea o actualiza las tablas automáticamente
    }),

    AuthModule,
    ProductoModule,
    CategoriaModule,
    AlmacenModule,
    AlertastockModule,
    MovimientoModule,
    RolModule,
    UsuarioModule,
    AuthModule,
    ProveedorModule,
    UbicacionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
