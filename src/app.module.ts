import { Module } from '@nestjs/common';
import { RethinkModule } from './rethink/rethink.module';

@Module({
  imports: [RethinkModule],
})
export class AppModule {}
