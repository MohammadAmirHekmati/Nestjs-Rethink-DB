import { Inject, Injectable } from '@nestjs/common';
import * as rethink from "rethinkdb"
import { resolveSrv } from 'dns';
import { InsertTestDto } from '../dto/insert-test.dto';
@Injectable()
export class RethinkService {

  private rethinkConnection
  constructor(@Inject("RethinkProvider") connection)
  {this.rethinkConnection=connection}

  async createTable(tableName:string):Promise<rethink.CreateResult>
  {
    const createTable=await rethink.db("test")
      .tableCreate(`${tableName}`)
      .run(this.rethinkConnection)

      return createTable
  }

  async createDatabase(dbName:string):Promise<rethink.CreateResult>
  {
    const createDb=await rethink.dbCreate(dbName)
      .run(this.rethinkConnection)
    return createDb
  }

  async insert(tableName:string,insertTestDto:InsertTestDto):Promise<rethink.WriteResult>
  {

    const result= await rethink.table(tableName)
      .insert(insertTestDto)
      .run(this.rethinkConnection)

    return result
  }

}