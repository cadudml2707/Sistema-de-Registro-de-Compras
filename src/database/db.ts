import * as SQLite from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { usuarios, compras } from "../models/schema";

const expoDb = SQLite.openDatabaseSync("app.db");

export const db = drizzle(expoDb, {
  schema: { usuarios, compras }
});
