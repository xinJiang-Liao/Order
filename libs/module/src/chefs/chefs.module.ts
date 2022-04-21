import { Module } from '@nestjs/common';
import { ChefsService } from './chefs.service';
import { MySequelizeModule } from '@app/module/sequelize.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { cooks } from '@app/module/chefs/chefs.model';

@Module({
  imports: [MySequelizeModule, SequelizeModule.forFeature([cooks], 'link')],
  providers: [ChefsService],
  exports: [ChefsService],
})
export class Chefs1Module {}
