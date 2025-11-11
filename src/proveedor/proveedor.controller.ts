import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
@ApiTags('proveedores')
@ApiBearerAuth()
@Controller('proveedores')
export class ProveedorController {
  constructor(private readonly proveedorService: ProveedorService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Crear proveedor' })
  create(@Body() data: CreateProveedorDto) {
    return this.proveedorService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Listar proveedores' })
  findAll() {
    return this.proveedorService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Obtener proveedor por id' })
  findOne(@Param('id') id: string) {
    return this.proveedorService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar proveedor por id' })
  remove(@Param('id') id: string) {
    return this.proveedorService.remove(+id);
  }
}
