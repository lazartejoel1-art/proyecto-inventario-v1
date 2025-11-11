import { Controller, Post, Body, Get } from '@nestjs/common';
import { RolService } from './rol.service';

@Controller('roles')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Post()
  create(@Body('nombre') nombre: string) {
    return this.rolService.create(nombre);
  }

  @Get()
  findAll() {
    return this.rolService.findAll();
  }
}
