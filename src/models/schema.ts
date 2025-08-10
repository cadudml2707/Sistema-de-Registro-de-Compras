import { sqliteTable, integer, text, real } from "drizzle-orm/sqlite-core";

export const compras = sqliteTable("compras", {
    id: integer("id").primaryKey({ autoIncrement: true}),
    nome: text("nome").notNull(),
    descricao: text("descricao").notNull(),
    preco: real("preco").notNull(),
    dataCompra: text("dataCompra").notNull(),  
    dataVencimento: text("dataVencimento").notNull(),  
    status: integer("status").notNull(),
});

export const usuarios = sqliteTable("usuarios", {
    email: text("email").primaryKey(),
    senha: text("senha").notNull(),
    nome: text("nome").notNull(),
});