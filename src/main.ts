import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>({
    module: AppModule,
    httpAdapter: new FastifyAdapter(),
  });
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
