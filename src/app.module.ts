import { Module } from '@nestjs/common';
import { FancodeModule } from './modules/fancode/fancode.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule, FancodeModule],
})
export class AppModule {}
