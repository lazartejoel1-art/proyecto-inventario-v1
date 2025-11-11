import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { MovimientoService } from './movimiento.service';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
@ApiTags('movimientos')
@ApiBearerAuth()
@Controller('movimientos')
export class MovimientoController {
  constructor(private readonly movimientoService: MovimientoService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Registrar un movimiento de entrada o salida' })
  create(@Body() data: CreateMovimientoDto) {
    return this.movimientoService.registrarMovimiento(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Listar todos los movimientos' })
  findAll() {
    return this.movimientoService.findAll();
  }
}
