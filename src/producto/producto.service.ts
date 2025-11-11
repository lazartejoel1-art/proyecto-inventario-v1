import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from '../entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  // Crear producto
  create(data: CreateProductoDto) {
    const nuevo = this.productoRepository.create(data);
    return this.productoRepository.save(nuevo);
  }

  // Listar todos los productos
  findAll() {
    return this.productoRepository.find();
  }

  // Buscar un producto por ID
  findOne(id: number) {
    return this.productoRepository.findOne({ where: { id } });
  }

  // Eliminar producto
  async remove(id: number) {
    const prod = await this.findOne(id);
    if (!prod) {
      return null;
    }
    return this.productoRepository.remove(prod);
  }
}
