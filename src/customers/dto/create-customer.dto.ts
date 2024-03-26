import { IsEmail, IsNumberString, IsString } from "class-validator";

export class CreateCustomerDto {
    @IsEmail()
    email: string;

    @IsNumberString()
    phone: string;

    @IsString()
    password: string;
}
