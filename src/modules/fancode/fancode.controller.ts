import { Controller, Get } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { TodoService } from '../todo/todo.service';
import { UserDto } from 'src/common/dto/user.dto';
import { TodoDto } from 'src/common/dto/todo.dto';

@Controller('fancode')
export class FancodeController {
  constructor(
    private readonly userService: UserService,
    private readonly todoService: TodoService
  ) {}

  @Get('check-todos')
  async checkTodos() {
    try {
      const users: UserDto[] = await this.userService.getUsers();
      const todos: TodoDto[] = await this.todoService.getTodos();

      const fancodeUsers = users.filter(user => {
        const { geo } = user.address;
        const lat = parseFloat(geo.lat);
        const lng = parseFloat(geo.lng);
        return lat > -40 && lat < 5 && lng > 5 && lng < 100;
      });

      const results = fancodeUsers.map(user => {
        const userTodos = todos.filter(todo => todo.userId === user.id);
        const completedTodos = userTodos.filter(todo => todo.completed).length;
        const totalTodos = userTodos.length;
        const completedPercentage = (completedTodos / totalTodos) * 100;
        return {
          userId: user.id,
          name: user.name,
          completedPercentage: completedPercentage,
          meetsCriteria: completedPercentage > 50,
        };
      });

      return results;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw new Error('Failed to fetch data');
    }
  }
}
