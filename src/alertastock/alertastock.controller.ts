import { Controller, Get } from '@nestjs/common';
import { AlertastockService } from './alertastock.service';

@Controller('alertas')
export class AlertastockController {
  constructor(private readonly alertasService: AlertastockService) {}

  @Get()
  findAll() {
    return this.alertasService.findAll();
  }
}
