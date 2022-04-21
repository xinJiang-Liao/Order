import { Controller, Get, Query } from '@nestjs/common';
import { InjectConnection } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { ChefsService } from '@app/module/chefs/chefs.service';

@Controller()
export class ChefsController {
  constructor(
    private readonly ChefsService: ChefsService,
    @InjectConnection('link') private readonly sequelize: Sequelize,
  ) {}

  /*查询所有菜品*/
  @Get('chefs/event')
  async getHello(@Query() query: any): Promise<any[]> {
    return await this.ChefsService.index();
  }
}
