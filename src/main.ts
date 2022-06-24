import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEYxP+TeKa8mShUKWAedAkcFgSkVwjSYgAnh9n/9Wsu41vpRrs5zS9aHi/HZo3kS6uZn3EkLSsLM1KlGO6L16yyw==",
    cert: "MHcCAQEEIOFdh1TgWtK2YuqUwLLyIi55n0scCP0BXr8gm1ZUhINkoAoGCCqGSM49AwEHoUQDQgAEYxP+TeKa8mShUKWAedAkcFgSkVwjSYgAnh9n/9Wsu41vpRrs5zS9aHi/HZo3kS6uZn3EkLSsLM1KlGO6L16yyw==",
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.enableCors({
    origin: true,
  });
  await app.listen(3000);
}
bootstrap();
