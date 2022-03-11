import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'western_food', timestamps: false })
export class Food extends Model {
  @Column
  /**
   * 简介
   * */
  introduce: string;

  @Column
  /**
   * 菜名
   * */
  foodName: string;

  @Column
  /**
   * 价格
   * */
  price: number;

  @Column
  /**
   * 数量
   * */
  number: number;

  @Column
  /**
   * 图片
   * */
  food_Image: string;
}
