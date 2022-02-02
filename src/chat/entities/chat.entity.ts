import { Channel } from "src/channels/entities/channel.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Chat {
 

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  channelId: string


  // @ManyToOne(() => Order, (order) => order.items)
  // order: Order;


  @ManyToOne(() => Channel, (channel) => channel.chat) 
  channel: Channel

  @Column()
  content: string

  @CreateDateColumn()
  createdAt: Date

  @DeleteDateColumn()
  deletedAt: Date

  @UpdateDateColumn()
  updatedAt: Date

}