import CustomBaseEntity from "src/database/entities/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Shipper extends CustomBaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    avatar: string;

    @Column()
    companyName: string;

    @Column({
        default: true
    })
    active: boolean;

    @Column()
    rate: number;
}
