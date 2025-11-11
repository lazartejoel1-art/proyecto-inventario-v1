import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UbicacionService } from './ubicacion.service';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiTags('ubicaciones')
@ApiBearerAuth()
@Controller('ubicaciones')
export class UbicacionController {
  constructor(private readonly ubicacionService: UbicacionService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Crear una ubicación dentro de un almacén' })
  create(@Body() data: CreateUbicacionDto) {
    return this.ubicacionService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Listar todas las ubicaciones' })
  findAll() {
    return this.ubicacionService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Obtener una ubicación por su ID' })
  findOne(@Param('id') id: string) {
    return this.ubicacionService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una ubicación por su ID' })
  remove(@Param('id') id: string) {
    return this.ubicacionService.remove(+id);
  }
}
