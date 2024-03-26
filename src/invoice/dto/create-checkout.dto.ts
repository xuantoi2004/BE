import { Type } from "class-transformer";
import { IsArray, IsNumber, IsNumberString, IsString, ValidateNested } from "class-validator";

export class InvoiceChildDto {
    productId: string;
    qty: string;
    total: string;
}

export class createCheckoutDto {
    @IsString()
    full_name: string;

    @IsNumberString()
    phone: string;

    @IsString()
    nation: string;

    @IsString()
    city: string;

    @IsString()
    district: string;

    @IsString()
    address: string;

    @IsNumberString()
    shipping: string;

    @IsNumberString()
    payment: string;

    @IsNumberString()
    total: string;

    @IsNumberString()
    customerId: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => InvoiceChildDto)
    invoice_childs: InvoiceChildDto[];
}