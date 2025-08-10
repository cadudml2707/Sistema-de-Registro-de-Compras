import { openDatabaseSync, deleteDatabaseSync } from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { db } from './db';

export function setupDatabase() {
    try {
        db.run(`PRAGMA foreign_keys = ON;`);
        db.run(`
      CREATE TABLE IF NOT EXISTS usuarios (
        email TEXT PRIMARY KEY,
        senha TEXT NOT NULL,
        nome TEXT NOT NULL
      );
    `);
        db.run(`
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
    } catch (error) {
        console.error("Erro ao inicializar o banco de dados:", error);
        throw error;
    }
}