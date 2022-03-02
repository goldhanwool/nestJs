import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      //exceptionFactory: (errors) => new BadRequestException({ messages: errors.reduce((acc, error) => ({ ...acc, [error.property]: Object.values(error.constraints).shift() }), {}) }),
    }),
  );
  const PORT = process.env.PORT;
  await app.listen(PORT);
}
bootstrap();
