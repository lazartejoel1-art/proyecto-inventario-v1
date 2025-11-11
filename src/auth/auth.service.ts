import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<Omit<Usuario, 'password'> | null> {
    const user = await this.usuarioRepo.findOne({
      where: { username },
      relations: ['rol'],
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password: _password, ...result } = user;
      return result;
    }

    return null;
  }

  
  login(user: Omit<Usuario, 'password'>) {
    const payload = {
      username: user.username,
      sub: user.id,
      rol: user.rol?.nombre,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  validateToken(token: string): Record<string, unknown> | null {
    try {
      const decoded: Record<string, unknown> = this.jwtService.verify(token);
      return decoded;
    } catch {
      return null;
    }
  }
}
