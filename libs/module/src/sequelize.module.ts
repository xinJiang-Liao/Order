import { Module } from '@nestjs/common';
import { SequelizeModule as Sequelize } from '@nestjs/sequelize';

@Module({
  imports: [
    Sequelize.forRoot({
      name: 'link',
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'hotelorder',
      autoLoadModels: true,
      synchronize: false,
    }),
  ],
})
export class MySequelizeModule {}
