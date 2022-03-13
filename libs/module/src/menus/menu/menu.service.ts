import { Injectable } from '@nestjs/common';
import { Food } from '@app/module/menus/menu/menu.model';

@Injectable()
export class MenuService {
  async index() {
    return await Food.findAll();
  }
}
