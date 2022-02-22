import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RethinkService } from '../service/rethink.service';
import * as rethink from 'rethinkdb';
import { InsertTestDto } from '../dto/insert-test.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Rethink DB")
@Controller("rethink")
export class RethinkController {
  constructor(private rethinkService:RethinkService)
  {}

  @Get("create/table/:name")
  async createTable(@Param("name") tableName:string):Promise<any>
  {
     return await this.rethinkService.createTable(tableName)
  }

  @Get("create/db/:name")
  async createDatabase(@Param("name") dbName:string):Promise<rethink.CreateResult>
  {
    return await this.rethinkService.createDatabase(dbName)
  }

  @Post("insert/:name")
  async insert(@Param("name") tableName:string,@Body() insertTestDto:InsertTestDto):Promise<any>
  {
    return await this.rethinkService.insert(tableName, insertTestDto)
  }
}