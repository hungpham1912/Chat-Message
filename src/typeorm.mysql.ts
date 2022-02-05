import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres' ,
  host: 'ec2-18-235-114-62.compute-1.amazonaws.com',
  port: 5432 || 3306,
  username: 'mkfjmyrvsgdlvh' || 'postgres',
  password: '6d14523586df2bc08a469a42525fea23a303f3e9fc1a6b6688d5c91d7503ac19' || 'root',
  database: 'd56341gdrl2kpf' || 'chat_socket',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

module.exports = typeOrmConfig;
