import { IsNumberString, IsString } from "class-validator";

export class CreateProductpropDto {
    @IsString()
    nameProp: string;

    @IsString()
    valueProp: string;

    @IsNumberString()
    productId: string;
}
