import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTodoInputDTO } from './dto/todo-input.dto';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post()
  @UsePipes(ValidationPipe)
  addNewTodo(@Body() todoInput: CreateTodoInputDTO): Todo {
    return this.todoService.addNewTodo(todoInput);
  }

  @Get()
  getAllTodos(): Array<Todo> {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  getTodoById(@Param('id') id: number): Todo {
    return this.todoService.getTodoById(id);
  }
}
