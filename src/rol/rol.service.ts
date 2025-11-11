import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from '../entities/rol.entity';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private readonly rolRepo: Repository<Rol>,
  ) {}

  create(nombre: string) {
    const rol = this.rolRepo.create({ nombre });
    return this.rolRepo.save(rol);
  }

  findAll() {
    return this.rolRepo.find();
  }

  findByName(nombre: string) {
    return this.rolRepo.findOne({ where: { nombre } });
  }
}
