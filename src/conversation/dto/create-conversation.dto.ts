import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { ConversationType } from "../entities/conversation.entity";

export class CreateConversationDto {

    @ApiProperty({
        example: ConversationType.DUO
    })
    @IsDefined()
    @IsNotEmpty()
    @IsEnum(ConversationType)
    style: ConversationType

    @ApiProperty({
        example: 'Tu Tien Group'
    })
    @IsString()
    name: string

}
