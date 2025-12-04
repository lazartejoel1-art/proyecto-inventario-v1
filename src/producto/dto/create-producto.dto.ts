//* eslint-disable @typescript-eslint/no-unsafe-call */

import { IsNotEmpty, IsInt, Min, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductoDto {
  @ApiProperty({ example: 'Obra en grafito' })
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    example: 'Dibujo en grafito con temática de la Diablada',
    required: false,
  })
  @IsOptional()
  descripcion?: string;

  @ApiProperty({ example: 50 })
  @IsInt()
  @Min(0)
  stockActual: number;

  @ApiProperty({ example: 5 })
  @IsInt()
  @Min(0)
  stockMinimo: number;
}
