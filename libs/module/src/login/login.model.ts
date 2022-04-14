import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'admin_login', timestamps: false })
export class login extends Model {
  @Column
  /**
   * 用户名
   * */
  username: string;

  @Column
  /**
   * 密码
   * */
  password: string;

  @Column
  /**
   * 等级
   * */
  code: number;

  @Column
  /**
   * 姓名
   * */
  name: number;

  @Column
  /**
   * 电话
   * */
  phone: string;

  @Column
  /**
   * 职位
   * */
  post: string;

  @Column
  /**
   * 个人简介
   * */
  resume: string;

  // @Column
  // /**
  //  * 权限等级
  //  * */
  // level: string;

  getModalType(): typeof login {
    return login;
  }

  status(): number {
    return 0;
  }
}
