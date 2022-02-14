import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule as Sequelize } from '@nestjs/sequelize';

@Module({
  imports: [
    Sequelize.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'liaojiangxin',
      password: '123456789qq',
      database: 'test',
      models: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
