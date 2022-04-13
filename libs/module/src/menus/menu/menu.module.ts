import { Module } from '@nestjs/common';
import { MySequelizeModule } from '@app/module/sequelize.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { MenuService } from './menu.service';
import { foods } from '@app/module/menus/menu/menu.model';

@Module({
  imports: [MySequelizeModule, SequelizeModule.forFeature([foods], 'link')],
  providers: [MenuService],
  exports: [MenuService],
})
export class MenuModule {}
