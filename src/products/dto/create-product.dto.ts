import { IsBoolean, IsBooleanString, IsNumber, IsNumberString, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    picture: string;

    @IsNumberString()
    price: number;

    @IsNumberString()
    discount: number;

    @IsBooleanString()
    discount_available: string;

    @IsBooleanString()
    product_available: string;

    @IsNumberString()
    supplier_id: number;

    @IsNumberString()
    category_id: number;

    @IsBooleanString()
    is_trending: string;

    @IsBooleanString()
    is_flashsale: string;

    @IsNumberString()
    qty: string;
}
