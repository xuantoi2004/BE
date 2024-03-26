import { PartialType } from '@nestjs/mapped-types';
import { CreateInvoiceChildDto } from './create-invoice_child.dto';

export class UpdateInvoiceChildDto extends PartialType(CreateInvoiceChildDto) {}
