import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '../../config/config.service';
import { UserDto } from 'src/common/dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly configService: ConfigService) {}

  async getUsers(): Promise<UserDto[]> {
    try {
      const url = this.configService.get('USERS_URL');
      const response = await axios.get<UserDto[]>(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new Error('Failed to fetch users');
    }
  }
}
