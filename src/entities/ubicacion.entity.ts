import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Almacen } from './almacen.entity';

@Entity()
export class Ubicacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @ManyToOne(() => Almacen, (almacen) => almacen.ubicaciones, {
    onDelete: 'CASCADE',
  })
  almacen: Almacen;
}
