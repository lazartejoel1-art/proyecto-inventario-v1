import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ubicacion } from './ubicacion.entity';

@Entity()
export class Almacen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @OneToMany(() => Ubicacion, (ubicacion) => ubicacion.almacen)
  ubicaciones: Ubicacion[];
}
