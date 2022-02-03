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

  async create(createChatDto: ChatDto) {
    const checkChannel =
      await this.channelService.findById(createChatDto.channelId)
    if (!checkChannel) {
      throw new HttpException(`Don't find Channel`, 400);
    }

    // const chat: ChatDto = {
    //   channelId: checkChannel.id,
    //   content: createChatDto.content,
    // };

    return await this.chatRepository.save(createChatDto);
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

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
