import { Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Users } from "../../users/entities/user.entity";
import {Event} from "../../events/entities/event.entity"

export class Registration {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne (type => Users, users => users.id, { eager: true })
    User: Users [];

    @ManyToOne (type => Event, event => event.id,  { eager: true })
    Event: Event [];
}
