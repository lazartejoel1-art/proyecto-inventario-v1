import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Producto } from './producto.entity';
import { Almacen } from './almacen.entity';

@Entity()
export class Movimiento {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Producto)
  producto: Producto;

  @ManyToOne(() => Almacen)
  almacen: Almacen;

  @Column()
  tipo: 'ENTRADA' | 'SALIDA';

  @Column('int')
  cantidad: number;

  @CreateDateColumn()
  fecha: Date;
}
