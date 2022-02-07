import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";
import { Role } from "../entities/user.entity";

export class CreateUserDto {
    @ApiProperty({
        example: "Phajm Thanh Hung"
    })
    @IsString()
    full_name: string;


    @ApiProperty({
        example: "0964816205"
    })
    @IsString()
    phone: string;


    @ApiProperty({
        example: "https://scontent.fhan4-3.fna.fbcdn.net/v/t1.6435-9/175652671_1420582284946874_429501063576353338_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=a4a2d7&_nc_ohc=nxg-kcflFlgAX-S8dMo&_nc_ht=scontent.fhan4-3.fna&oh=00_AT_zWLNnvI5Fb1EXXI-_WP6osxZyZwhLXyLa5qlXUY9ZSQ&oe=6222123A"
    })
    @IsString()
    URLimage: string


    @ApiProperty({
        example: "phamthanh.hung.work@gmail.com"
    })
    @IsString()
    email: string;


    @ApiProperty({
        example: "Viet Nam"
    })
    @IsString()
    adress: string;

    @ApiProperty({
        example: "123456"
    })
    @IsString()
    password: string;

    @ApiProperty({
        example: "user"
    })
    @IsString()
    role: Role;
}
