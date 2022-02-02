import { ApiProperty } from "@nestjs/swagger"
import { IsDefined, IsNotEmpty, IsUUID } from "class-validator"

export class CreateChannelDto {

    @ApiProperty({
        example: '57ee0cf5-efca-4961-a0be-de9311ced817'
    })
    @IsNotEmpty()
    @IsDefined()
    @IsUUID()
    userId: string


    @ApiProperty({
        example:'75650cb7-6e6b-44b1-8f1d-e595da50063c'
    })
    @IsNotEmpty()
    @IsDefined()
    @IsUUID()
    conversationId: string
}
