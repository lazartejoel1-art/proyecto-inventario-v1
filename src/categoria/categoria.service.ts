import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  create(data: CreateCategoriaDto) {
    const nueva = this.categoriaRepository.create(data);
    return this.categoriaRepository.save(nueva);
  }

  findAll() {
    return this.categoriaRepository.find();
  }

  findOne(id: number) {
    return this.categoriaRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const cat = await this.findOne(id);
    if (!cat) {
      return null;
    }
    return this.categoriaRepository.remove(cat);
  }
}
