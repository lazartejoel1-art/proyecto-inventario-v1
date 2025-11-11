import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimiento } from '../entities/movimiento.entity';
import { Producto } from '../entities/producto.entity';
import { Almacen } from '../entities/almacen.entity';
import { AlertaStock } from '../entities/alertastock.entity';
import { MovimientoService } from './movimiento.service';
import { MovimientoController } from './movimiento.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movimiento, Producto, Almacen, AlertaStock]),
  ],
  controllers: [MovimientoController],
  providers: [MovimientoService],
})
export class MovimientoModule {}
