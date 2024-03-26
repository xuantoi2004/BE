import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateGoodsCategoryDto {
    @IsNotEmpty()
    @IsString()
    good_name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    picture: string;
}
