import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';
import { Request } from 'express';

interface RequestUser {
  rol: string;
}

// Extiende la interfaz Request para incluir 'user'
declare module 'express-serve-static-core' {
  interface Request {
    user?: RequestUser;
  }
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    const request = context.switchToHttp().getRequest<Request>();
    const user = request.user as RequestUser; // viene del JwtStrategy

    if (!roles) {
      return true; // si no se especifican roles, se permite
    }

    return roles.includes(user?.rol); // comparamos rol de usuario con roles permitidos
  }
}
