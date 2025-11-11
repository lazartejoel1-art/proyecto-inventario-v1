import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Rol } from './rol.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string; // encriptada con bcrypt

  @ManyToOne(() => Rol, (rol) => rol.usuarios, { eager: true })
  rol: Rol;

  @Column({ default: true })
  isActive: boolean;
}
