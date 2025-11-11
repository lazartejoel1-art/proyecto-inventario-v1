import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Almacen } from '../entities/almacen.entity';
import { CreateAlmacenDto } from './dto/create-almacen.dto';

@Injectable()
export class AlmacenService {
  constructor(
    @InjectRepository(Almacen)
    private readonly almacenRepo: Repository<Almacen>,
  ) {}

  create(data: CreateAlmacenDto) {
    const nuevo = this.almacenRepo.create(data);
    return this.almacenRepo.save(nuevo);
  }

  findAll() {
    return this.almacenRepo.find();
  }

  findOne(id: number) {
    return this.almacenRepo.findOne({ where: { id } });
  }

  async remove(id: number) {
    const alm = await this.findOne(id);
    if (!alm) return null;
    return this.almacenRepo.remove(alm);
  }
}
