import { PickType } from '@nestjs/swagger';
import { Chat } from 'src/chat/entities/chat.entity';
import { Conversation } from 'src/conversation/entities/conversation.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Channel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  conversationId: string;

  @ManyToOne(() => User, (user) => user.channel, {
    eager: true,
  })
  user: User;

  @OneToMany(() => Chat, (chat) => chat.channel, {
    eager: true,
  })
  chat: Chat[];

  @ManyToOne(() => Conversation)
  conversation: string;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export class Sender extends PickType(CreateUserDto, ['full_name','URLimage'] as const){
  
}

export class ResultChannel{

  sender: Sender;

  chat: Chat;

}