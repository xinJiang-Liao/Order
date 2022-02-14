import { NestFactory } from '@nestjs/core';
import { GoodsModule } from './goods.module';

async function bootstrap() {
  const app = await NestFactory.create(GoodsModule);
  await app.listen(3000);
}
bootstrap();
