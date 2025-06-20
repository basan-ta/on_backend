import { Module } from '@nestjs/common';
import { UserController } from './user.controller'; // Import the controller
import { UsersController } from './users.controller';
import { UsersController } from './users.controller';

@Module({
    controllers: [UserController, UsersController], // Use the correct class name
})
export class UsersModule {}
