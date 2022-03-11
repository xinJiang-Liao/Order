import { Module } from '@nestjs/common';
import { ModuleService } from './module.service';

@Module({
  providers: [ModuleService],
  exports: [ModuleService],
  imports: [],
})
export class ModuleModule {}
