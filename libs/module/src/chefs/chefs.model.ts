import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'cooks', timestamps: false })
export class cooks extends Model {
  @Column
  /**
   * 用户名
   * */
  name: string;

  @Column
  /**
   * 密码
   * */
  age: string;

  @Column
  /**
   * 等级
   * */
  work_time: number;

  @Column
  /**
   * 姓名
   * */
  advantages: number;

  @Column
  /**
   * 电话
   * */
  major_foods: string;

  @Column
  /**
   * 职位
   * */
  honor: string;

  @Column({ type: DataType.TEXT })
  /**
   * 个人简介
   * */
  chef_image: any;

  // @Column
  // /**
  //  * 权限等级
  //  * */
  // level: string;

  getModalType(): typeof cooks {
    return cooks;
  }
}
