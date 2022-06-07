import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {Users} from "./entities/user.entity"
import {createConnection, getManager} from "typeorm";

const connection = createConnection ()



@Injectable()
export class UsersService {
  async create(user: CreateUserDto) {
    const users = await (await connection).manager.query (`INSERT INTO users (id, email, password, first_name, last_name, date_of_birth, role_id, is_active) VALUES ('${user.id}', '${user.email}', '${user.password}', '${user.first_name}', '${user.last_name}', '${user.date_of_birth}', '${user.role_id}', '${user.is_active}')`);
    return users;
  }

  async findAll() {
    const users = await (await connection).manager.query ('SELECT * FROM users');
    return users;
  }

  async findOne(id: string) {
    const user = await (await connection).manager.query (`SELECT * FROM users WHERE id=${id}`);
    return user; 
  }

  async update(id: number, user: UpdateUserDto) {
    const users = await (await connection).manager.query (`UPDATE users SET (email, password, first_name, last_name, date_of_birth, role_id, is_active) = ('${user.email}', '${user.password}', '${user.first_name}', '${user.last_name}', '${user.date_of_birth}', '${user.role_id}', '${user.is_active}') WHERE id=${id}`);
    return users;
  }

  async remove(id: number) {
    const user = await (await connection).manager.query (`DELETE FROM users WHERE id=${id}`);
    return user;
  }
}
