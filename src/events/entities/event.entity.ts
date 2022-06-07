import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Users } from "../../users/entities/user.entity";
import {Categories} from '../../categories/entities/category.entity'

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column("bool")
    is_open: boolean;

    @Column("bool")
    is_active: boolean;

    @Column("int")
    places_nb: number;

    @ManyToOne(type => Users, user => user.id, { eager: true })
    admin_id: Users[];

    @ManyToOne(type => Categories, category => category.id, { eager: true })
    category_id: Categories[];

    @Column("datetime")
    date: Date;

    @Column("datetime")
    created_at: Date;
}
