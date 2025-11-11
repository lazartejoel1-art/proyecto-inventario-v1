import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';

@Controller('categorias') // ahora las rutas comienzan con /categorias
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  // POST /categorias
  @Post()
  create(@Body() data: CreateCategoriaDto) {
    return this.categoriaService.create(data);
  }

  // GET /categorias
  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }

  // GET /categorias/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaService.findOne(+id);
  }

  // DELETE /categorias/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaService.remove(+id);
  }
}
