/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IsInt, IsIn, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMovimientoDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  productoId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  almacenId: number;

  @ApiProperty({ example: 'ENTRADA', enum: ['ENTRADA', 'SALIDA'] })
  @IsIn(['ENTRADA', 'SALIDA'])
  tipo: 'ENTRADA' | 'SALIDA';

  @ApiProperty({ example: 5 })
  @IsInt()
  @Min(1)
  cantidad: number;
}
