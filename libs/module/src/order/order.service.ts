import { Injectable } from '@nestjs/common';
import { orders } from '@app/module/order/order.model';
import { Op } from 'sequelize';
import { UpdateEntity } from '../../../libs/utils/src/model-helper';

@Injectable()
export class OrderService {
  /*查询 所有订单*/
  async index() {
    return await orders.findAll();
  }

  /*创建 订单*/
  async pushOrder(body: any): Promise<any> {
    console.log('body', body);
    let Orders: orders;
    if (body) {
      Orders = await orders.findOne({
        where: {
          [Op.and]: [{ desk_code: body.desk_code }, { state: body.state }],
        },
      });
      if (Orders) {
        // console.log('查询是否拥有未完成的订单', Orders);
        console.log(body.desk_code, ' 桌/房间存在未完成的订单 ');
        return false;
      } else {
        Orders = await orders.build(body);
        console.log('创建完成!');
        await Orders.save();
      }
    }
    return '订单创建完成！';
  }

  /*删除 菜品*/
  async DelOrder(body: any): Promise<any> {
    let Orders: orders;
    if (body.id)
      Orders = await orders.findOne({
        where: { id: body.id },
      });
    // console.log(Login);
    if (Orders) {
      return await Orders.destroy();
    } else {
      return '没有这个订单信息!';
    }
  }

  /*修改 菜品信息*/
  async updata(body: any): Promise<orders> {
    let Orders: orders;
    if (body.id) Orders = await orders.findOne({ where: { id: body.id } });
    // console.log(Login);
    if (Orders) {
      UpdateEntity(Orders, body);
    } else {
      Orders = orders.build(body);
    }
    return Orders.save();
  }
}
