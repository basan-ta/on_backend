import { Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query() query: any) {
    const usersService = new UsersService();
    if (query.gender) {
      return usersService
        .getAllusers()
        .filter((u) => u.gender === query.gender);
    }
    return usersService.getAllusers();
  }
  @Post()
  createUser() {
    const users = {
      id: 3,
      name: 'tiktak',
      age: 20,
      gender: 'male',
      isMarried: true,
    };

    const usersService = new UsersService();
    usersService.createUser(users);
    return 'Bro!! A new user has been created';
  }
}
