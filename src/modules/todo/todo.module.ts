import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { ConfigModule } from '../../config/config.module';

@Module({
  imports: [ConfigModule],
  providers: [TodoService],
  exports: [TodoService],
})
export class TodoModule {}
