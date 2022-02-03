import { Exclude } from 'class-transformer';
import { channel } from 'diagnostics_channel';
import { Channel } from 'src/channels/entities/channel.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity()
export class User {
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  full_name: string;

  @Column({
    length: 1000,
  })
  URLimage: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;

  @OneToMany(() => Channel, (channel) => channel.user)
  channel: Channel[];
}
