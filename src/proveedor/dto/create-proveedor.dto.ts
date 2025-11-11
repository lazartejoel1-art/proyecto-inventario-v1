/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProveedorDto {
  @ApiProperty({ example: 'Proveedor Arte Lima' })
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    example: 'Carlos Pérez',
    required: false,
  })
  @IsOptional()
  contacto?: string;

  @ApiProperty({
    example: '987654321',
    required: false,
  })
  @IsOptional()
  telefono?: string;
}
