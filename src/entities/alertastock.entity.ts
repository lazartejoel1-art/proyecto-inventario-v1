import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Producto } from './producto.entity';

@Entity()
export class AlertaStock {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Producto)
  producto: Producto;

  @Column()
  mensaje: string;

  @CreateDateColumn()
  fecha: Date;
}
