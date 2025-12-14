import {
  Pool,
  PoolClient,
  QueryResult,
  QueryResultRow,
} from "pg";

declare global {
  // eslint-disable-next-line no-var
  var pgPool: Pool | undefined;
}

const pool =
  global.pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    max: 5,
  });

if (process.env.NODE_ENV !== "production") {
  global.pgPool = pool;
}

export const query = <T extends QueryResultRow = any>(
  text: string,
  params?: any[]
): Promise<QueryResult<T>> => {
  return pool.query(text, params);
};

export const getClient = (): Promise<PoolClient> => {
  return pool.connect();
};

export const poolInstance = pool;
