import { Module } from '@nestjs/common';
import { UsersController } from './users.controller'; // Correct import

@Module({
  controllers: [UsersController], // Correct class name
})
export class UsersModule {}
