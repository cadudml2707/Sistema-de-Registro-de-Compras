import * as SQLite from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";

export async function setupDatabase() {
    try {
        const db = SQLite.openDatabaseSync("app.db");
        
        await db.execAsync(`
            CREATE TABLE IF NOT EXISTS usuarios (
                email TEXT PRIMARY KEY,
                senha TEXT NOT NULL,
                nome TEXT NOT NULL
            );
        `);
        
        console.log("Banco de dados inicializado com sucesso!");
        return drizzle(db);
    } catch (error) {
        console.error("Erro ao inicializar o banco de dados:", error);
        throw error;
    }
}