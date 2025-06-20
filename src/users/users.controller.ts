import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(){
        return "you made a GET request to /users";
    }
    @Post()
    createUser(){
        return "Bro!! A new user has been created";
    }
}
