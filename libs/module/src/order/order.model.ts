import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { json } from 'sequelize';

@Table({ tableName: 'orders', timestamps: false })
export class orders extends Model {
  @Column
  /**
   * 客房/堂食
   * */
  position: string;

  @Column
  /**
   * 座号/房间号
   * */
  desk_code: string;

  @Column
  /**
   * 手机号
   * */
  phone: string;

  @Column({ type: DataType.JSON })
  /**
   * 所点菜品
   * */
  foods: any;

  @Column
  /**
   * 订单创建时间
   * */
  createtime: string;

  @Column
  /**
   * 订单状态
   * */
  state: string;

  @Column
  /**
   * 支付金额
   * */
  Charge_amount: number;

  @Column
  /**
   * 订单结束时间
   * */
  endtime: string;

  getModalType(): typeof orders {
    return orders;
  }
}
