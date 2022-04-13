import { Body, Controller, Get, Post, Query, Req } from "@nestjs/common";
import { LoginService } from '@app/module/login/login.service';
import { AuthPasswordRequestDto, common } from './auth.interface';

@Controller()
export class HotelController {
  constructor(private readonly loginService: LoginService) {}

  @Post('admin')
  async adminLOGIN(
    @Body() body: AuthPasswordRequestDto,
    @Req() request: any,
  ): Promise<any> {
    // console.log('request:', request);
    // let loginStatus: boolean;
    const coupons = await this.loginService.login(body);
    if (coupons) {
      if (coupons.password == body.password) {
        return { status: true, code: coupons.code };
      } else {
        return { status: false };
      }
    } else {
      return { status: false };
    }
  }

  @Get('admin/common')
  async commonAdmin(@Query() query: any): Promise<any> {
    return await this.loginService.getCommon(query);
  }

  @Get('admin/super')
  async superAdmin(): Promise<any> {
    return await this.loginService.getSuper();
  }
}
