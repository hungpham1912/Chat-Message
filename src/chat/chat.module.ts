import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './entities/chat.entity';
import { ChannelsService } from 'src/channels/channels.service';
import { Channel } from 'src/channels/entities/channel.entity';
import { ConversationService } from 'src/conversation/conversation.service';
import { Conversation } from 'src/conversation/entities/conversation.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { ChatGateway } from './chat-gateway/chat.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Chat, Channel,Conversation, User])],
  controllers: [ChatController],
  providers: [ChatService, ChannelsService, ConversationService, UsersService,ChatGateway]
})
export class ChatModule {}
