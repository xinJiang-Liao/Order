import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { LoginService } from '@app/module/login/login.service';
import {
  AuthPasswordRequestDto,
  common,
  data,
  update,
} from './hotel.interface';
import assert from 'assert';

@Controller()
export class HotelController {
  constructor(private readonly loginService: LoginService) {}

  /*登录验证*/
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

  /*获取 普通管理员信息*/
  @Get('admin/common')
  async commonAdmin(@Query() query: any): Promise<any> {
    return await this.loginService.getCommon(query);
  }

  /*添加 管理员信息*/
  @Post('admin/pushAdmin')
  async pushAdmin(@Body() body: data) {
    // console.log('传入数据：', body);
    return this.loginService.pushAdmin(body);
  }

  /*修改 管理员信息*/
  @Post('admin/upDate')
  async alterCommon(@Body() body: update) {
    return this.loginService.updata(body);
  }

  /*删除 管理员信息*/
  @Post('admin/DelAdmin')
  async DelAdmin(@Body() body: data) {
    // console.log('请求数据', body);
    return this.loginService.DelAdmin(body);
  }

  /*获取 超级管理员信息*/
  @Get('admin/super')
  public async superAdmin(): Promise<any> {
    return await this.loginService.getSuper();
  }
}
