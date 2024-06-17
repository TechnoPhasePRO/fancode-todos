import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '../../config/config.service';
import { TodoDto } from 'src/common/dto/todo.dto';

@Injectable()
export class TodoService {
  constructor(private readonly configService: ConfigService) {}

  async getTodos(): Promise<TodoDto[]> {
    try {
      const url = this.configService.get('TODOS_URL');
      const response = await axios.get<TodoDto[]>(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw new Error('Failed to fetch todos');
    }
  }
}
