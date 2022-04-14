import { Injectable } from '@nestjs/common';
import { login } from '@app/module/login/login.model';
import { Op } from 'sequelize';

import { UpdateEntity } from './model-helper';

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

  /*修改管理员信息*/
  async updata(body: any): Promise<login> {
    // 判断是否存在除开admin的超级管理员
    // const a = this.getSuper();

    /*让超级管理员无法修改自己的权限等级*/
    if (body.id == 2 || body.id == 1) {
      if (body.data.code == 0) {
        return;
      }
    }
    let Login: login;
    if (body.id) Login = await login.findOne({ where: { id: body.id } });
    // console.log(Login);
    if (Login) {
      UpdateEntity(Login, body.data);
    } else {
      Login = login.build(body.data);
    }
    return Login.save();
  }

  /*添加管理员*/
  async pushAdmin(body: any): Promise<any> {
    let Login: login;
    if (body) {
      Login = await login.findOne({ where: { username: body.username } });
      // console.log('Login', Login);
      if (Login) {
        // console.log('查询是否拥有重复用户名', Login);
        return '用户名已存在！';
      } else {
        Login = await login.build({
          username: body.username,
          password: body.password,
          name: body.username,
          phone: body.phone,
          code: body.code,
          post: body.post,
          resume: body.resume,
        });
        return await Login.save();
      }
    }
  }

  /*删除 管理员*/
  async DelAdmin(body: any): Promise<any> {
    if (body.code !== 1) {
      let Login: login;
      if (body)
        Login = await login.findOne({
          where: { username: body.username },
        });
      // console.log(Login);
      if (Login) {
        return await Login.destroy();
      } else {
        return '没有这个管理员信息!';
      }
    }
    return '超级管理员不可删除';
  }
}
