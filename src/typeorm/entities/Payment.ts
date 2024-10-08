import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'payments' })
export class Payment {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'float', nullable: false })
    amount: number;
}