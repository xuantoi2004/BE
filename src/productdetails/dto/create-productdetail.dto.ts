import { IsBooleanString, IsNumberString, IsString } from "class-validator";

export class CreateProductdetailDto {
    @IsString()
    picture: string;

    @IsNumberString()
    productId: string;

}
