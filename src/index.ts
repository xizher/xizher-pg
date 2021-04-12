import { QueryResult, Pool, PoolConfig } from 'pg'

let pool = new Pool()

export function setGlobelConfig (config: PoolConfig) : void {
  pool && pool.end()
  pool = new Pool(config)
}

async function pgSqlExec <T> (sqlStr: string) : Promise<QueryResult<T>> {
  const client = await pool.connect()
  const result = await client.query(sqlStr)
  client.release()
  return result
}

export default pgSqlExec
