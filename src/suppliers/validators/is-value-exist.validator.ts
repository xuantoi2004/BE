import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { Supplier } from "src/suppliers/entities/supplier.entity";

@ValidatorConstraint({ async: true })
export class IsValueExistConstraint implements ValidatorConstraintInterface {

    async validate(value: any, validationArguments?: ValidationArguments) {
        const property = validationArguments.property;

        const supplier = await Supplier.createQueryBuilder('sup')
            .where(`sup.${property} = :value`, {
                value
            })
            .getOne();

        if (supplier) {
            return false; // Value already exists
        }

        return true; // Value doesn't exist
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return `${validationArguments.property} with value: ${validationArguments.value} has already exists`;
    }
}

export function IsValueExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsValueExistConstraint,
        });
    };
}
