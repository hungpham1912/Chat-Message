import { ApiProperty, PartialType, PickType } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { CreateChannelDto } from "src/channels/dto/create-channel.dto";

export class CreateChatDto extends PartialType(CreateChannelDto) {

    @ApiProperty({
        example: "Hung asdasd"
    })
    @IsDefined()
    @IsString()
    content : string
}

export class ChatDto extends PickType(CreateChatDto, ['content'] as const) {
    
    @ApiProperty({
        example: ""
    })
    @IsUUID()
    @IsNotEmpty()
    @IsDefined()
    channelId: string
}
