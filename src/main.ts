import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { QueryFailedFilter } from './common/exceptions/query.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    exposedHeaders: ['Content-Disposition'],
  })

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new QueryFailedFilter())
  app.setGlobalPrefix('api')

  await app.listen(3000);
}
bootstrap();
