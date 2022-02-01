import { Channel } from "src/channels/entities/channel.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Chat {
 

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Channel) 
  channel: string

  @Column()
  content: string

  @CreateDateColumn()
  createdAt: Date

  @DeleteDateColumn()
  deletedAt: Date

  @UpdateDateColumn()
  updated: Date

}