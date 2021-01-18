import { Injectable, NotFoundException } from '@nestjs/common';

import { Todo } from './todo.model';
import { CreateTodoInputDTO } from './dto/todo-input.dto';

@Injectable()
export class TodoService {
  private todos: Array<Todo> = [];

  addNewTodo(createTodoDTO: CreateTodoInputDTO): Todo {
    const id: number = this.todos.length
      ? this.todos[this.todos.length - 1].id + 1
      : 1;

    const modelledTodo: Todo = {
      id,
      title: createTodoDTO.title,

      description: createTodoDTO.description,
    };

    this.todos.push(modelledTodo);

    return modelledTodo;
  }

  getAllTodos(): Array<Todo> {
    if (!this.todos.length) {
      throw new NotFoundException('', 'No todos found');
    }
    return this.todos;
  }

  getTodoById(inpid: number): Todo {
    console.log(this.todos.filter((each) => each.id === inpid));
    return;
  }
}
