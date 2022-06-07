import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import {createConnection} from "typeorm";
import { Question } from './entities/question.entity';

const connection = createConnection ()

@Injectable()
export class QuestionsService {
  async create(question: CreateQuestionDto) {
    const questions = await (await connection).manager.query (`INSERT INTO questions (title, answer) VALUES ('${question.title}', '${question.answer}')`);
    return questions;
  }

  async findAll() {
    const questions = await (await connection).manager.query ('SELECT * FROM questions');
    return questions;  
  }

  async findOne(id: number) {
    const question = await (await connection).manager.query (`SELECT * FROM questions WHERE id=${id}`);
    return question; 
  }

  async update(id: number, question: UpdateQuestionDto) {
    const questions = await (await connection).manager.query (`UPDATE questions SET (title, answer) = ('${question.title}', '${question.answer}') WHERE id=${id}`);
    return questions;
  }

  async remove(id: number) {
    const question = await (await connection).manager.query (`DELETE FROM questions WHERE id=${id}`);
    return question;
  }
}
