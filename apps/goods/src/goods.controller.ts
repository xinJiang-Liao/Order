import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { InjectConnection } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { MenuService } from '@app/module/menu/menu.service';
import { foods } from '@app/module/menu/menu.model';
import { foodData } from './foods.interface';

@Controller()
export class GoodsController {
  constructor(
    private readonly goodsService: GoodsService,
    private readonly menuService: MenuService,
    @InjectConnection('link') private readonly sequelize: Sequelize,
  ) {}

  /*添加 一个规格或者多个菜品规格的信息*/
  @Post('goods/pushFood')
  async pushAdmin(@Body() body: foodData[]) {
    // console.log('传入数据：', body);
    return this.menuService.pushFood(body);
  }

  /*删除 菜品信息*/
  @Post('goods/DelFood')
  async DelAdmin(@Body() body: any) {
    // console.log('请求数据', body);
    return this.menuService.DelFood(body);
  }

  /*修改 菜品信息*/
  @Post('goods/upDate')
  async alterCommon(@Body() body: any) {
    return this.menuService.updata(body);
  }

  /*查询所有菜品*/
  @Get('goods/event')
  async getHello(@Query() query: any): Promise<foods[]> {
    return await this.menuService.index();
  }
}
