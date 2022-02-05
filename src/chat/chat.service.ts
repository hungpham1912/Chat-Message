import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChannelsService } from 'src/channels/channels.service';
import { Repository } from 'typeorm';
import { ChatDto, CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>,
    private readonly channelService: ChannelsService,
  ) {}

  async create(createChatDto: CreateChatDto) {
    const checkChannel =
      await this.channelService.findByUserIdAndConvId(createChatDto.userId, createChatDto.conversationId)
    if (!checkChannel) {
      throw new HttpException(`Don't find Channel`, 400);
    }

    const chat: ChatDto = {
      channelId: checkChannel.id,
      content: createChatDto.content,
    };

     await this.chatRepository.save(chat);
     return {...chat,user: checkChannel.user}
  }

  findAll() {
    return `This action returns all chat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  async remove() {
    const listChat = await this.chatRepository.find();
    for(let i =0 ; i<listChat.length;i++){
      await this.chatRepository.delete(listChat[i].id)
    }
  }
}
