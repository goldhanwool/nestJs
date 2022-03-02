import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @Req() req: Request,
    @Body() Body,
    @Param() param: { id: string; name: string },
  ): string {
    return this.appService.getHello();
  }
} //AppController
