import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbicacionService } from './ubicacion.service';
import { UbicacionController } from './ubicacion.controller';
import { Ubicacion } from '../entities/ubicacion.entity';
import { Almacen } from '../entities/almacen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ubicacion, Almacen])],
  controllers: [UbicacionController],
  providers: [UbicacionService],
})
export class UbicacionModule {}
