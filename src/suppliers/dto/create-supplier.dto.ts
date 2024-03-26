import { IsNumber, IsString, IsNumberString, IsEmail, IsBoolean, IsBooleanString } from "class-validator";
import { IsValueExist } from "../validators/is-value-exist.validator";

export class CreateSupplierDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsValueExist()
    @IsNumberString()
    phone: string;

    @IsValueExist()
    @IsEmail()
    email: string;

    @IsString()
    address: string;

    @IsString()
    city: string;

    @IsString()
    country: string;

    @IsString()
    postal_code: string;

    @IsString()
    url: string;

    @IsString()
    logo: string;

    @IsNumberString()
    ranking: string;

    @IsBooleanString()
    active: string;
}
