import { Module } from '@nestjs/common';
import { ChefsController } from './chefs.controller';
import { Chefs1Module } from '@app/module/chefs/chefs.module';
import { ChefsService } from '@app/module/chefs/chefs.service';

@Module({
  imports: [Chefs1Module],
  controllers: [ChefsController],
  providers: [ChefsService],
})
export class ChefsModule {}
