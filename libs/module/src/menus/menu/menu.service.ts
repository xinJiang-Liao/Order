import { Injectable } from '@nestjs/common';
import { foods } from '@app/module/menus/menu/menu.model';

@Injectable()
export class MenuService {
  async index() {
    return await foods.findAll();
  }
}
