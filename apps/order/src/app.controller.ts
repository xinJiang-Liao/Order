import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { OrderService } from '@app/module/order/order.service';
import { InjectConnection } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

import { orders } from '@app/module/order/order.model';

export interface body {
  id?: number;
  position: string;
  desk_code: string;
  phone: string;
  foods: foodData[];
  createtime: string;
  state: string;
  Charge_amount: number;
  payment_amount?: number;
}

export interface foodData {
  type: string;
  price: number;
  number: number;
  volume: string;
  foodName: string;
}

export interface search {
  state?: string;
  startAt?: string;
  endAt?: string;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly orderService: OrderService,
    @InjectConnection('link') private readonly sequelize: Sequelize,
  ) {}

  /*添加 一个订单的信息*/
  @Post('orders/pushOrder')
  async pushOrder(@Body() body: body) {
    // console.log('传入数据：', body);

    return this.orderService.pushOrder(body);
  }

  /*删除 订单信息*/
  @Post('orders/DelOrder')
  async DelOrder(@Body() body: any) {
    // console.log('请求数据', body);
    return this.orderService.DelOrder(body);
  }

  /*修改 订单信息*/
  @Post('orders/upDate')
  async alterOrder(@Body() body: any) {
    return this.orderService.updata(body);
  }

  /*查询所有订单*/
  @Get('orders/event')
  async getOrders(@Query() query: search): Promise<any> {
    return await this.orderService.index(query);
  }
}
