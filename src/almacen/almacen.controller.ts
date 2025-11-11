import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { CreateAlmacenDto } from './dto/create-almacen.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiTags('almacenes')
@ApiBearerAuth()
@Controller('almacenes')
export class AlmacenController {
  constructor(private readonly almacenService: AlmacenService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Crear un nuevo almacén' })
  create(@Body() data: CreateAlmacenDto) {
    return this.almacenService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Listar todos los almacenes' })
  findAll() {
    return this.almacenService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Obtener un almacén por su ID' })
  findOne(@Param('id') id: string) {
    return this.almacenService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un almacén por su ID' })
  remove(@Param('id') id: string) {
    return this.almacenService.remove(+id);
  }
}
