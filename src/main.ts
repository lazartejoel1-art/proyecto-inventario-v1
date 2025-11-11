//* eslint-disable @typescript-eslint/no-floating-promises */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activar validaciones globales
  app.useGlobalPipes(new ValidationPipe());

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle(
      'Proyecto 2 - Sistema de control de inventario (NestJS + PostgreSQL)',
    )
    .setDescription(
      'API para la gestión de inventario, productos, categorías, proveedores, movimientos y alertas de stock.',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
void bootstrap();
