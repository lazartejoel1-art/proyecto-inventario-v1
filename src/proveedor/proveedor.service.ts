import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proveedor } from '../entities/proveedor.entity';
import { CreateProveedorDto } from './dto/create-proveedor.dto';

@Injectable()
export class ProveedorService {
  constructor(
    @InjectRepository(Proveedor)
    private readonly proveedorRepo: Repository<Proveedor>,
  ) {}

  create(data: CreateProveedorDto) {
    const nuevo = this.proveedorRepo.create(data);
    return this.proveedorRepo.save(nuevo);
  }

  findAll() {
    return this.proveedorRepo.find();
  }

  findOne(id: number) {
    return this.proveedorRepo.findOne({ where: { id } });
  }

  async remove(id: number) {
    const prov = await this.findOne(id);
    if (!prov) return null;
    return this.proveedorRepo.remove(prov);
  }
}
