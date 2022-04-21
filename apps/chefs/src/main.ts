import { NestFactory } from '@nestjs/core';
import { ChefsModule } from './chefs.module';

async function bootstrap() {
  const app = await NestFactory.create(ChefsModule);

  /**
   * 这个方法辅助解决了url跨域问题
   * */
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
