import { QueryResult, PoolConfig } from 'pg';
export declare function setGlobelConfig(config: PoolConfig): void;
declare function pgSqlExec<T>(sqlStr: string): Promise<QueryResult<T>>;
export default pgSqlExec;
