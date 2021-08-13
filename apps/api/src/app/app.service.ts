import { Injectable } from '@nestjs/common';
import { Todo } from '@blog/data'

@Injectable()
export class AppService {
  todos: Todo[];
  constructor() {
    this.todos = [{ title: 'Todo 1' }, { title: 'Todo 2' }];
  }

  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }

}