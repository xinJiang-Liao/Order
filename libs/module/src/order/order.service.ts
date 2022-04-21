import { Injectable } from '@nestjs/common';
import { orders } from '@app/module/order/order.model';
import { Op } from 'sequelize';
import { UpdateEntity } from '../../../libs/utils/src/model-helper';

@Injectable()
export class OrderService {
  /*查询 订单*/
  async index(query?: any) {
    console.log(query);
    /*根据状态查询*/
    if (query.state) {
      return await orders.findAll({
        where: {
          state: query.state,
        },
      }); /*根据时间段查询*/
    } else if (query.startAt && query.endAt) {
      return await orders.findAll({
        where: {
          endtime: {
            [Op.between]: [query.startAt, query.endAt],
          },
        },
      });
    } else {
      return await orders.findAll();
    }
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
    return Orders;
  }

  /*删除 菜品*/
  async DelOrder(body: any): Promise<any> {
    console.log(body.id);
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

  /*修改 订单信息*/
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
