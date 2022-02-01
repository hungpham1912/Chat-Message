import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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
  id: number;

  @Column()
  full_name: string;

  @Column()
  
  phone: string;

  @Column()
  email: string;

  @Column()
  adress: string;


  @Exclude()
  @Column()
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;

  

}