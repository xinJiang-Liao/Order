import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';
import { MenuModule } from '@app/module/menus/menu/menu.module';

@Module({
  imports: [MenuModule],
  controllers: [GoodsController],
  providers: [GoodsService],
})
export class GoodsModule {}
