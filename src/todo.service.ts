import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TodoService {
  private readonly todosUrl = 'http://jsonplaceholder.typicode.com/todos';

  async getTodos() {
    const response = await axios.get(this.todosUrl);
    return response.data;
  }
}
