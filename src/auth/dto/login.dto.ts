import { IsDecimal, IsDefined, IsEmail, IsNotEmpty } from "class-validator";

export class LoginAuthDto {

    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsDefined()
    password: string
}


