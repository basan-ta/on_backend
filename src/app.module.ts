import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, TweetModule],
  controllers: [AppController, UsersModule],
  providers: [AppService],
})
export class AppModule {}
