import * as rethink from "rethinkdb"
export const rethinkProvider=
  {
    provide:"RethinkProvider",
    useFactory:async ()=>{
      const connection=await rethink.connect({host:"localhost",timeout:20,port:28015})
      return connection
    }
  }
