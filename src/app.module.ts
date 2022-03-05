import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as typeOrmConfig from './typeorm.mysql';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';
import { ChannelsModule } from './channels/channels.module';
import { ConversationModule } from './conversation/conversation.module';
import { AppController } from './app.controller';
import { config } from 'dotenv';
import { MulterModule } from '@nestjs/platform-express';

config();
@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    ChatModule,
    ChannelsModule,
    ConversationModule,
    MulterModule.register({
      dest: './upload',
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
