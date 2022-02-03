import { UseFilters } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WebSocketServerOptions,
  WsException,
  WsResponse,
} from '@nestjs/websockets';
import { ChatService } from '../chat.service';
import { ChatDto } from '../dto/create-chat.dto';
import { Chat } from '../entities/chat.entity';
// import { Server } from 'http';

@ApiTags('Gateway')
@WebSocketGateway()
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}
  @WebSocketServer()
  server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() chat: ChatDto) {
    this.chatService.create(chat);
    this.server.emit('message', chat);
  }
}
