import { NestFactory } from '@nestjs/core';
import { GoodsModule } from './goods.module';

async function bootstrap() {
  const app = await NestFactory.create(GoodsModule);

  /**
   * 这个方法辅助解决了url跨域问题
   * */
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
