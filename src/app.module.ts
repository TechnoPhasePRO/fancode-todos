import { Module } from '@nestjs/common';
import { FancodeController } from './fancode.controller';
import { TodoService } from './todo.service';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [FancodeController],
  providers: [UserService, TodoService],
})
export class AppModule {}
 