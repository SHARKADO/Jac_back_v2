import "reflect-metadata";
import {createConnection} from "typeorm";
import { User } from './users/entities/user.entity';

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.email = "tossemlucas@gmail.com";
    user.password = "MotDePasse3001";
    user.first_name = "Lucas2";
    user.last_name = "TOSSEM2";
    user.date_of_birth = new Date;
    user.role_id = 1;
    user.created_at = new Date;
    user.is_active = true;

    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));