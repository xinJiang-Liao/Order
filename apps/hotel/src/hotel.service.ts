import { Injectable } from '@nestjs/common';

@Injectable()
export class HotelService {
  getHello(): string {
    console.log('Hello World!');
    return 'Hello World!';
  }
}
