import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateSupplierDto } from './create-supplier.dto';
import { IsEmail, IsNumberString, IsString } from 'class-validator';

export class UpdateSupplierDto extends PartialType(
    OmitType(CreateSupplierDto, ['phone', 'email'])
) {
    @IsNumberString()
    phone: string;

    @IsEmail()
    email: string;
}
