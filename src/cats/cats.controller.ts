import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCurrentCat() {
    return 'current Cat';
  }

  @Post('signUp')
  async signUp(@Body() catRequestDto: CatRequestDto) {
    console.log(catRequestDto);
    return this.catsService.signUp(catRequestDto);
  }

  @Post('login')
  login() {
    return 'login';
  }

  @Post('logout')
  logOut() {
    return 'logout';
  }

  @Post('upload/cats')
  uploadCatImg() {
    return 'uploadImg';
  }
} //class
