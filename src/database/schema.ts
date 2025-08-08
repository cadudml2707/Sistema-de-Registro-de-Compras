import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const compras = sqliteTable("compras", {
    id: integer("id").primaryKey({ autoIncrement: true}),
    name: text("name").notNull(),
});

export const usuarios = sqliteTable("usuarios", {
    email: text("email").primaryKey(),
    senha: text("senha").notNull(),
    nome: text("nome").notNull(),
})