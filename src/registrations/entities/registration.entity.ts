import { Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "../../users/entities/user.entity";
import {Event} from "../../events/entities/event.entity"

export class Registration {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne (type => User, users => users.id, { eager: true })
    User: User [];

    @ManyToOne (type => Event, event => event.id,  { eager: true })
    Event: Event [];
}
