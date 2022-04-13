import { NestFactory } from '@nestjs/core';
import { OrderModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(OrderModule);
  await app.listen(3000);
}
bootstrap();
