import { IsString } from "class-validator";
import { Role } from "../entities/user.entity";

export class CreateUserDto {
    @IsString()
    full_name: string;

    @IsString()
    phone: string;

    @IsString()
    email: string;

    @IsString()
    adress: string;

    @IsString()
    password: string;

    @IsString()
    role: Role;
}
