import CustomBaseEntity from "src/database/entities/base.entity";
import { Supplier } from "src/suppliers/entities/supplier.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payment extends CustomBaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    paymentName: string;

    @Column({
        length: 600
    })
    description: string;

    @Column({
        default: false
    })
    allowed: boolean;

    @ManyToOne(() => Supplier, (supplier) => supplier.payments)
    @JoinColumn()
    supplier: Supplier
}
