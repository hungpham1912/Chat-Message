import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConversationService } from 'src/conversation/conversation.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { Channel, ResultChannel, Sender } from './entities/channel.entity';

@Injectable()
export class ChannelsService {
  constructor(
    @InjectRepository(Channel)
    private readonly channelRepository: Repository<Channel>,
    private readonly conversationService: ConversationService,
  ) {}
  create(createChannelDto: CreateChannelDto) {
    const create = this.channelRepository.create(createChannelDto);
    return this.channelRepository.save(create);
  }

  async findByUserIdAndConvId(UserId: string, ConvId: string) {
    const channel =  await this.channelRepository.findOne({where:{userId: UserId, conversationId: ConvId}});
    return channel
  }

  async findByUserId(userId: string) {
    const chanels = await this.channelRepository.find({
      where: { userId: userId },
    });
    const listId = [];
    for (let i = 0; i < chanels.length; i++) {
      const conv = await this.conversationService.findOne(
        chanels[i].conversationId,
      );
      listId[i] = conv;
    }
    return listId;
  }

  async findByConvId(id: string) {
    const channel = await this.channelRepository.find({
      where: { conversationId: id },
    });
    const result: ResultChannel[] = [];
    let count = 0;
    for (let i = 0; i < channel.length; i++) {
      for (let j = 0; j < channel[i].chat.length; j++) {
        result[count] = {
          sender: {
            id: channel[i].userId,
            URLimage: channel[i].user.URLimage,
            full_name: channel[i].user.full_name,
          },
          chat: channel[i].chat[j],
        };
        count++;
      }
    }
    const kq = result.sort((n1,n2) =>{
      if(n1.chat.createdAt>n2.chat.createdAt) return 1;
      if(n1.chat.createdAt<n2.chat.createdAt) return -1;
      return 0;

    })

    return kq;
  }

  findAll() {
    return this.channelRepository.find();
  }

  update(id: number, updateChannelDto: UpdateChannelDto) {
    return `This action updates a #${id} channel`;
  }

  remove(id: number) {
    return `This action removes a #${id} channel`;
  }
}
