import { Controller, Get } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { InjectConnection } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { MenuService } from '@app/module/menus/menu/menu.service';

@Controller()
export class GoodsController {
  constructor(
    private readonly goodsService: GoodsService,
    private readonly menuService: MenuService,
    @InjectConnection('link') private readonly sequelize: Sequelize,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    // try {
    //   await this.sequelize.authenticate();
    //   console.log('连接已成功建立');
    // } catch (error) {
    //   console.error('无法连接到数据库:', error);
    // }
    await this.menuService.index();
    return this.goodsService.getHello();
  }
}
