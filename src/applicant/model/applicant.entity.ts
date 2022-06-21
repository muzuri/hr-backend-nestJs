import {Column, Entity,PrimaryGeneratedColumn} from "typeorm";

@Entity('applicant')
export class Applicant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({unique: true})
    email: string;

    @Column()
    age: string;

    @Column({default:'Pending'})
    status: string;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column()
    cv: string;

    @Column()
    education_level: string;

    @Column()
    years_experience: string;
}