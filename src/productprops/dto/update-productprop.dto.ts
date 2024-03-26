import { PartialType } from '@nestjs/mapped-types';
import { CreateProductpropDto } from './create-productprop.dto';

export class UpdateProductpropDto extends PartialType(CreateProductpropDto) {}
