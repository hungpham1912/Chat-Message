import { Module } from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { ChannelsController } from './channels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Channel } from './entities/channel.entity';
import { ConversationService } from 'src/conversation/conversation.service';
import { Conversation } from 'src/conversation/entities/conversation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Channel,Conversation])],
  controllers: [ChannelsController],
  providers: [ChannelsService,ConversationService]
})
export class ChannelsModule {}
