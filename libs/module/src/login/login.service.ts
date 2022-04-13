import { Injectable } from '@nestjs/common';
import { login } from '@app/module/login/login.model';
import { Op } from 'sequelize';

@Injectable()
export class LoginService {
  /*登录验证*/
  async login(req: any) {
    console.log('参数是：', req);
    return await login.findOne({
      where: {
        username: req.username,
      },
    });
  }

  /*获取普通管理员信息，一个或者全部*/
  async getCommon(req: any) {
    console.log('参数是：', req);
    let data: any;
    if (req.username) {
      data = login.findOne({
        where: {
          username: req.username,
        },
      });
      if (!data) {
        return '用户名无效';
      }
    } else if (req.all == true) {
      data = login.findAll({
        where: {
          code: {
            [Op.ne]: 1,
          },
        },
      });
    }
    return data;
  }

  /*获取除开admin的超级管理员*/
  async getSuper() {
    return await login.findOne({
      where: {
        code: 1,
        username: {
          [Op.ne]: 'admin',
        },
      },
    });
  }
}
