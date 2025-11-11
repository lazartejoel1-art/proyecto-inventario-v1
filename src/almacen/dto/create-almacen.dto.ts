/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAlmacenDto {
  @ApiProperty({ example: 'Depósito Central' })
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ example: 'Av. Siempre Viva 123' })
  @IsNotEmpty()
  direccion: string;
}
