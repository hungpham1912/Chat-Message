import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConversationService } from 'src/conversation/conversation.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { Channel } from './entities/channel.entity';

@Injectable()
export class ChannelsService {
  constructor(
    @InjectRepository(Channel)
    private readonly channelRepository: Repository<Channel>,
    private readonly conversationService: ConversationService,
    private readonly userService: UsersService
  ) {}
  create(createChannelDto: CreateChannelDto) {
    const create = this.channelRepository.create(createChannelDto)
    return this.channelRepository.save(create);
  }

  async findByUserIdAndConversationId(userId, conversationId){
    return await this.channelRepository.findOne({where:{userId: userId, conversationId: conversationId}})
  }

  async findByUserId(userId){
    const chanels = await this.channelRepository.find({where:{userId: userId}})
    const listId = []
    for(let i=0;i<chanels.length;i++){
      const conv = await this.conversationService.findOne(chanels[i].conversationId)
      listId[i]= conv;
    }
    return listId;
  }

  async findByConvId(id: string){
    const channel = await this.channelRepository.find({where:{conversationId:id}})
    

    
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
