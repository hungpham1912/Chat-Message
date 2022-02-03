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
import { ChatDto, CreateChatDto } from '../dto/create-chat.dto';
import { Chat } from '../entities/chat.entity';
// import { Server } from 'http';

@ApiTags('Gateway')
@WebSocketGateway()
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}
  @WebSocketServer()
  server;

  @SubscribeMessage('message')
  async handleMessage(@MessageBody() chat: CreateChatDto) {
    const result = await this.chatService.create(chat);
    this.server.emit('message', result);
  }

  @SubscribeMessage('test')
  test(@MessageBody() chat: string){
  console.log("🚀 ~ file: chat.gateway.ts ~ line 32 ~ ChatGateway ~ chat", chat)
  this.server.emit('test', chat);
}

}
