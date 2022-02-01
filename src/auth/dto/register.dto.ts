import { IsString } from "class-validator";
import { Role } from "../../users/entities/user.entity";
export class RegisterAuthDto {
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
