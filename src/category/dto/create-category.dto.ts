import { IsBooleanString, IsNumber, IsNumberString, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    categoryName: string;

    @IsString()
    description: string;

    @IsString()
    picture: string;

    @IsBooleanString()
    active: string;

    @IsNumberString()
    goodCateId: number;
}

