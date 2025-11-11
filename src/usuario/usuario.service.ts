import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Usuario } from '../entities/usuario.entity';
import { Rol } from '../entities/rol.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,
    @InjectRepository(Rol)
    private readonly rolRepo: Repository<Rol>,
  ) {}

  async create(data: CreateUsuarioDto) {
    const existe = await this.usuarioRepo.findOne({
      where: { username: data.username },
    });
    if (existe) {
      throw new BadRequestException('El username ya existe');
    }

    let rol = await this.rolRepo.findOne({ where: { nombre: data.rolNombre } });
    if (!rol) {
      // si no existe el rol lo creamos rápido
      rol = this.rolRepo.create({ nombre: data.rolNombre });
      rol = await this.rolRepo.save(rol);
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(data.password, salt);

    const usuario = this.usuarioRepo.create({
      username: data.username,
      password: hash,
      rol,
    });

    return this.usuarioRepo.save(usuario);
  }

  findByUsername(username: string) {
    return this.usuarioRepo.findOne({ where: { username } });
  }
}
