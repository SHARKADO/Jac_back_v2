import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import {createConnection, getManager} from "typeorm";

const connection = createConnection ()

@Injectable()
export class EventsService {
  async create(event: CreateEventDto) {
    const events = await (await connection).manager.query (`INSERT INTO events (id, title, description, is_open, is_active, places_nb, admin_id, date) VALUES ('${event.id}', '${event.title}', '${event.description}', '${event.is_open}', '${event.is_active}', '${event.places_nb}', '${event.admin_id}', '${event.date}')`);
    return events;
  }

  async findAll() {
    const event = await (await connection).manager.query ('SELECT * FROM events');
    return event;
  }

  async findOne(id: number) {
    const event = await (await connection).manager.query (`SELECT * FROM events WHERE id=${id}`);
    return event; 
  }

  async update(id: number, event: UpdateEventDto) {
    const events = await (await connection).manager.query (`UPDATE events SET (title, description, is_open, is_active, places_nb, admin_id, date) = ('${event.title}', '${event.description}', '${event.is_open}', '${event.is_active}', '${event.places_nb}', '${event.admin_id}', '${event.date}') WHERE id=${id}`);
    return events;
  }

  async remove(id: number) {
    const event = await (await connection).manager.query (`DELETE FROM event WHERE id=${id}`);
    return event;
  }
}
