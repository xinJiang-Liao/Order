import { Module } from '@nestjs/common';
import { MySequelizeModule } from '@app/module/sequelize.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { LoginService } from './login.service';
import { login } from '@app/module/login/login.model';

@Module({
  imports: [MySequelizeModule, SequelizeModule.forFeature([login], 'link')],
  providers: [LoginService],
  exports: [LoginService],
})
export class LoginModule {}
