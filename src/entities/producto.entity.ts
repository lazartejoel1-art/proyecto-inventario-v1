import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column('int', { default: 0 })
  stockActual: number;

  @Column('int', { default: 0 })
  stockMinimo: number;
}
