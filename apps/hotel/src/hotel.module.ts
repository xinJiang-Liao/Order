import { Module } from '@nestjs/common';
import { HotelController } from './hotel.controller';
import { HotelService } from './hotel.service';
/*数据库连接*/
import { LoginModule } from '@app/module/login/login.module';

import { GoodsModule } from '../../goods/src/goods.module';
import { OrdersModule } from '../../order/src/app.module';

@Module({
  imports: [LoginModule, GoodsModule, OrdersModule],
  controllers: [HotelController],
  providers: [HotelService],
})
export class HotelModule {}
