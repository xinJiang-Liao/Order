import { Injectable } from '@nestjs/common';
import { foods } from '@app/module/menu/menu.model';
import { UpdateEntity } from '../../../libs/utils/src/model-helper';
import { Op } from 'sequelize';
import assert from 'assert';
// import { login } from '@app/module/login/login.model';

@Injectable()
export class MenuService {
  /*查询 所有菜品*/
  async index() {
    return await foods.findAll();
  }

  /*添加 菜品*/
  async pushFood(body: any): Promise<any> {
    // console.log('body', body);
    for (const x of body) {
      // console.log('xxxxxxx:', x);
      let Foods: foods;
      if (body) {
        Foods = await foods.findOne({
          where: {
            [Op.and]: [{ foodName: x.foodName }, { price: x.price }],
          },
        });
        if (Foods) {
          // console.log('查询是否拥有菜名和价格一样的数据', Foods);
          console.log(x.price, ' 元的 ', x.foodName, ' 已存在且已有相关规格!');
          continue;
        } else {
          Foods = await foods.build(x);
          console.log(x.price, ' 元的 ', x.foodName, ' 创建完成!');
          await Foods.save();
          continue;
        }
      }
    }
    return '创建完成！';
  }

  /*删除 菜品*/
  async DelFood(body: any): Promise<any> {
    let Foods: foods;
    if (body.id)
      Foods = await foods.findOne({
        where: { id: body.id },
      });
    // console.log(Login);
    if (Foods) {
      return await Foods.destroy();
    } else {
      return '没有这个管理员信息!';
    }
  }

  /*修改 菜品信息*/
  async updata(body: any): Promise<foods> {
    let Foods: foods;
    if (body.id) Foods = await foods.findOne({ where: { id: body.id } });
    // console.log(Login);
    if (Foods) {
      UpdateEntity(Foods, body);
    } else {
      Foods = foods.build(body);
    }
    return Foods.save();
  }
}
