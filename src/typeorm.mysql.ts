import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.HOST || 'localhost',
  port: 3306,
  username: 'hung',
  password: 'hung1912',
  database: 'chat_socket',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

module.exports = typeOrmConfig;
