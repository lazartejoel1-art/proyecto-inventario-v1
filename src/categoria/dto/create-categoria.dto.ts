/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriaDto {
  @ApiProperty({ example: 'Materiales de Arte' })
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    example: 'Incluye lienzos, pinturas, pinceles y lápices de dibujo.',
    required: false,
  })
  @IsOptional()
  descripcion?: string;
}
