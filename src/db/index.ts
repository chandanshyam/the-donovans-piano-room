import { drizzle } from "drizzle-orm/libsql";
import * as schema  from './schema';
import { createClient } from "@libsql/client";

const client = createClient({url: 'DATABASE_URL', authToken: 'DATABASE_AUTH_TOKEN'});
const db = drizzle(client, {schema});

export { db };
