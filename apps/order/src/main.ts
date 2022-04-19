import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);

  /**
   * 这个方法辅助解决了url跨域问题
   * */
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
