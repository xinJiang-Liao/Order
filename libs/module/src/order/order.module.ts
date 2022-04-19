import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { MySequelizeModule } from '@app/module/sequelize.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { orders } from '@app/module/order/order.model';

@Module({
  imports: [MySequelizeModule, SequelizeModule.forFeature([orders], 'link')],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
