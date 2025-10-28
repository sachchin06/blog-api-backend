import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  public getUsers() {
    return 'return all users';
  }

  @Post()
  public createUsers() {
    return 'create new User';
  }
}
