import { Chat } from "src/chat/entities/chat.entity";
import { Conversation } from "src/conversation/entities/conversation.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity()
export class Channel {
 

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string

  @Column()
  conversationId: string

  @ManyToOne(() => User) 
  user: string


  @OneToMany(() => Chat, (chat) => chat.channel,{
    eager: true,
  })
  chat: Chat[];


  @ManyToOne(()=> Conversation)
  conversation: string

  @CreateDateColumn()
  createdAt: Date

  @DeleteDateColumn()
  deletedAt: Date

  @UpdateDateColumn()
  updatedAt: Date

}