import { Injectable } from '@nestjs/common';
import { cooks } from '@app/module/chefs/chefs.model';

@Injectable()
export class ChefsService {
  /*查询 所有菜品*/
  async index() {
    return await cooks.findAll();
  }
}
