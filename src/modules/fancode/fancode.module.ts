import { Module } from '@nestjs/common';
import { FancodeController } from './fancode.controller';
import { UserModule } from '../user/user.module';
import { TodoModule } from '../todo/todo.module';

@Module({
  imports: [UserModule, TodoModule],
  controllers: [FancodeController],
})
export class FancodeModule {}
