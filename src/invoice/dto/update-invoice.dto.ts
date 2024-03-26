import { PartialType } from '@nestjs/mapped-types';
import { CreateInvoiceDto } from './create-invoice.dto';
import { IsBooleanString, IsNumberString, IsString } from 'class-validator';

export class UpdateInvoiceDto {
    @IsString()
    full_name: string;

    @IsString()
    nation: string;

    @IsString()
    city: string;

    @IsString()
    district: string;

    @IsString()
    address: string;

    @IsBooleanString()
    shipping: string;

    @IsBooleanString()
    payment: string;

    @IsNumberString()
    phone: string;
}
