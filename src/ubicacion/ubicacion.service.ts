import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ubicacion } from '../entities/ubicacion.entity';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';
import { Almacen } from '../entities/almacen.entity';

@Injectable()
export class UbicacionService {
  constructor(
    @InjectRepository(Ubicacion)
    private readonly ubicacionRepo: Repository<Ubicacion>,
    @InjectRepository(Almacen)
    private readonly almacenRepo: Repository<Almacen>,
  ) {}

  async create(data: CreateUbicacionDto) {
    const almacen = await this.almacenRepo.findOne({
      where: { id: data.almacenId },
    });

    if (!almacen) {
      throw new NotFoundException('El almacén asociado no existe');
    }

    const nueva = this.ubicacionRepo.create({
      nombre: data.nombre,
      descripcion: data.descripcion,
      almacen: almacen,
    });

    return this.ubicacionRepo.save(nueva);
  }

  findAll() {
    return this.ubicacionRepo.find({ relations: ['almacen'] });
  }

  findOne(id: number) {
    return this.ubicacionRepo.findOne({
      where: { id },
      relations: ['almacen'],
    });
  }

  async remove(id: number) {
    const ubicacion = await this.findOne(id);
    if (!ubicacion) {
      throw new NotFoundException('Ubicación no encontrada');
    }
    return this.ubicacionRepo.remove(ubicacion);
  }
}
