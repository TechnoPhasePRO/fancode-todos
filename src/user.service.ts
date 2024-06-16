import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class UserService {
  private readonly usersUrl = 'http://jsonplaceholder.typicode.com/users';

  async getUsers() {
    const response = await axios.get(this.usersUrl);
    return response.data;
  }
}
