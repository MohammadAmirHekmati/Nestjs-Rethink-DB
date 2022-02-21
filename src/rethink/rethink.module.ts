import { Module } from '@nestjs/common';
import { RethinkController } from './controller/rethink.controller';
import { RethinkService } from './service/rethink.service';
import { rethinkProvider } from './provider/rethink.provider';

@Module({
  controllers:[RethinkController],
  providers:[RethinkService,rethinkProvider]
})
export class RethinkModule {}
