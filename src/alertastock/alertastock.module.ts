import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlertaStock } from '../entities/alertastock.entity';
import { AlertastockService } from './alertastock.service';
import { AlertastockController } from './alertastock.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AlertaStock])],
  controllers: [AlertastockController],
  providers: [AlertastockService],
})
export class AlertastockModule {}
