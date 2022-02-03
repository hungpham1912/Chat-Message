import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as typeOrmConfig from './typeorm.mysql';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';
import { ChannelsModule } from './channels/channels.module';
import { ConversationModule } from './conversation/conversation.module';
import { AppController } from './app.controller';

@Module({
  imports: [AuthModule, UsersModule, TypeOrmModule.forRoot(typeOrmConfig), ChatModule, ChannelsModule, ConversationModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
