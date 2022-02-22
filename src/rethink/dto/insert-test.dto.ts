import { ApiProperty } from '@nestjs/swagger';

export class InsertTestDto {
  @ApiProperty()
  name:string

  @ApiProperty()
  age:number
}