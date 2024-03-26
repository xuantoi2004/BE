import { IsEmail, IsNumberString, IsString } from "class-validator";

export class LoginCustomerDto {
    @IsString()
    username: string;

    @IsString()
    password: string;
}
