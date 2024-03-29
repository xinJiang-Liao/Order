import { Column, DataType, Model, Table } from "sequelize-typescript";
import { type } from "os";

@Table({ tableName: 'foods', timestamps: false })
export class foods extends Model {
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

  @Column({ type: DataType.TEXT })
  /**
   * 图片
   * */
  food_Image: any;

  @Column
  /**
   * 类型
   * */
  type: string;

  @Column
  /**
   * 规格
   * */
  volume: string;

  getModalType(): typeof foods {
    return foods;
  }
}
