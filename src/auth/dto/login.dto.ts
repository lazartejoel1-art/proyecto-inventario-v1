/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'joel' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: '1234' })
  @IsNotEmpty()
  password: string;
}
