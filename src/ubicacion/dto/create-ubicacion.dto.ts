/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IsNotEmpty, IsOptional, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUbicacionDto {
  @ApiProperty({ example: 'Estante A - Nivel 2' })
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    example: 'Zona de exhibición principal',
    required: false,
  })
  @IsOptional()
  descripcion?: string;

  @ApiProperty({ example: 1, description: 'ID del almacén asociado' })
  @IsInt()
  almacenId: number;
}
