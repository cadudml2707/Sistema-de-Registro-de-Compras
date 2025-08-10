import { openDatabaseSync, deleteDatabaseSync } from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';

export async function setupDatabase() {
    try {

        const db = openDatabaseSync('app.db');

        db.execSync(`
            PRAGMA foreign_keys = ON;
            
            CREATE TABLE IF NOT EXISTS usuarios (
                email TEXT PRIMARY KEY,
                senha TEXT NOT NULL,
                nome TEXT NOT NULL
            );
        `);

        db.execSync(`
            CREATE TABLE IF NOT EXISTS compras (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,     
                descricao TEXT NOT NULL,
                preco TEXT NOT NULL,  
                dataCompra TEXT NOT NULL,
                dataVencimento TEXT NOT NULL,
                status INTEGER NOT NULL
            );
        `);

        console.log("Banco de dados inicializado com sucesso!");
        return drizzle(db);
    } catch (error) {
        console.error("Erro ao inicializar o banco de dados:", error);
        throw error;
    }
}