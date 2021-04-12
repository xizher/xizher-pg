"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setGlobelConfig = void 0;
const pg_1 = require("pg");
let pool = new pg_1.Pool();
function setGlobelConfig(config) {
    pool && pool.end();
    pool = new pg_1.Pool(config);
}
exports.setGlobelConfig = setGlobelConfig;
async function pgSqlExec(sqlStr) {
    const client = await pool.connect();
    const result = await client.query(sqlStr);
    client.release();
    return result;
}
exports.default = pgSqlExec;
