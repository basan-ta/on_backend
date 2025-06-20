import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module'; // Import TweetModule
import { UsersController } from './users/users.controller';

@Module({
  imports: [UsersModule, TweetModule], // Add both UsersModule and TweetModule
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
