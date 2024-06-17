import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigModule } from '../../config/config.module';

@Module({
  imports: [ConfigModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
