import CustomBaseEntity from "src/database/entities/base.entity";
import { Invoice } from "src/invoice/entities/invoice.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer extends CustomBaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true
    })
    firstName: string;

    @Column({
        nullable: true
    })
    lastName: string;

    @Column({
        nullable: true
    })
    nation1: string;

    @Column({
        nullable: true
    })
    city1: string;

    @Column({
        nullable: true
    })
    address1: string;

    @Column({
        nullable: true
    })
    district1: string;

    @Column({
        nullable: true
    })
    nation2: string;

    @Column({
        nullable: true
    })
    city2: string;

    @Column({
        nullable: true
    })
    address2: string;

    @Column({
        nullable: true
    })
    district2: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column({
        nullable: true
    })
    avatar: string;

    @Column({
        default: 0
    })
    jcoin: number;

    @Column()
    password: string;

    @Column({
        type: Boolean,
        default: false
    })
    isAdmin: boolean;

    @Column({
        default: true
    })
    active: boolean;

    @Column({
        type: Boolean,
        default: true
    })
    gender: boolean;

    @OneToMany(() => Invoice, (invoice) => invoice.customer)
    @JoinColumn()
    invoices: Invoice[];
}
