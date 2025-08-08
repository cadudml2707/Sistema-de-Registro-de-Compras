import * as SQLite from "expo-sqlite";

export async function setupDatabase() {
    const db = SQLite.openDatabaseSync("app.db");

    db.execAsync(`
        CREATE TABLE IF NOT EXISTS usuarios (
            email TEXT PRIMARY KEY,
            senha TEXT NOT NULL,
            nome TEXT NOT NULL,
        );
    `)
}