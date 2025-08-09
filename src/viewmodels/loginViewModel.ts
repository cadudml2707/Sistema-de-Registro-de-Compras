import { db } from "../database/db";
import { usuarios } from "../models/schema";
import { eq } from "drizzle-orm";

export async function validaUsuario(email: string, senha: string): Promise<boolean> {
    const usuario = await db
        .select()
        .from(usuarios)
        .where(eq(usuarios.email, email))
        .get();  // Usando .get() para buscar apenas um registro

    if (!usuario) return false;  // Usuário não encontrado
    return usuario.senha === senha;  // Comparação em texto puro (apenas para desafio)
}