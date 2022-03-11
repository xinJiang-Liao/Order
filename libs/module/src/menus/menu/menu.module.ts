import { Module } from '@nestjs/common';
import { MySequelizeModule } from '@app/module/sequelize.module';
import { Food } from '@app/module/menus/menu/menu.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { MenuService } from './menu.service';

@Module({
  imports: [MySequelizeModule, SequelizeModule.forFeature([Food], 'link')],
  providers: [MenuService],
  exports: [MenuService],
})
export class MenuModule {}
