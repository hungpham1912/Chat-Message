import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, IsDefined, IsEmail, IsNotEmpty } from "class-validator";

export class LoginAuthDto {

    @ApiProperty({
        example: "phamthanh.hung.work@gmail.com"
    })
    @IsEmail()
    email: string


    @ApiProperty({
        example: "123456"
    })
    @IsNotEmpty()
    @IsDefined()
    password: string
}


