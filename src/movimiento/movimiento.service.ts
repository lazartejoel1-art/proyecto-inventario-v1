import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movimiento } from '../entities/movimiento.entity';
import { Producto } from '../entities/producto.entity';
import { Almacen } from '../entities/almacen.entity';
import { AlertaStock } from '../entities/alertastock.entity';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';

@Injectable()
export class MovimientoService {
  constructor(
    @InjectRepository(Movimiento)
    private readonly movRepo: Repository<Movimiento>,
    @InjectRepository(Producto)
    private readonly prodRepo: Repository<Producto>,
    @InjectRepository(Almacen)
    private readonly almRepo: Repository<Almacen>,
    @InjectRepository(AlertaStock)
    private readonly alertaRepo: Repository<AlertaStock>,
  ) {}

  async registrarMovimiento(data: CreateMovimientoDto): Promise<Movimiento> {
    // SOLO PARA DEPURAR: ver qué llega
    console.log('DATA QUE LLEGA AL SERVICIO:', data);

    if (!data.productoId || !data.almacenId || !data.tipo || !data.cantidad) {
      throw new BadRequestException('Faltan datos en el cuerpo de la petición');
    }

    const producto = await this.prodRepo.findOne({
      where: { id: data.productoId },
    });
    const almacen = await this.almRepo.findOne({
      where: { id: data.almacenId },
    });

    console.log('PRODUCTO ENCONTRADO:', producto);
    console.log('ALMACEN ENCONTRADO:', almacen);

    if (!producto) {
      throw new NotFoundException(
        `Producto con id ${data.productoId} no encontrado`,
      );
    }

    if (!almacen) {
      throw new NotFoundException(
        `Almacén con id ${data.almacenId} no encontrado`,
      );
    }

    // Actualizar stock
    if (data.tipo === 'ENTRADA') {
      producto.stockActual += data.cantidad;
    } else if (data.tipo === 'SALIDA') {
      producto.stockActual -= data.cantidad;
    } else {
      throw new BadRequestException('tipo debe ser ENTRADA o SALIDA');
    }

    await this.prodRepo.save(producto);

    // Crear movimiento
    const mov = this.movRepo.create({
      tipo: data.tipo,
      cantidad: data.cantidad,
      producto,
      almacen,
    } as Partial<Movimiento>);

    const movimientoGuardado = await this.movRepo.save(mov);

    // Crear alerta si el stock es bajo
    if (producto.stockActual < producto.stockMinimo) {
      const alerta = this.alertaRepo.create({
        producto,
        mensaje: `Stock bajo de la obra "${producto.nombre}". Stock actual: ${producto.stockActual}`,
      } as Partial<AlertaStock>);

      await this.alertaRepo.save(alerta);
    }

    return movimientoGuardado;
  }

  findAll() {
    return this.movRepo.find({ relations: ['producto', 'almacen'] });
  }
}
