import { db } from "../database/db";
import { usuarios } from "./schema";
import { eq } from "drizzle-orm";

export async function validaUsuario(email: string, senha: string): Promise<boolean> {
    const usuario = await db
        .select()
        .from(usuarios)
        .where(eq(usuarios.email, email))
        .get();  

    if (!usuario) return false;  
    return usuario.senha === senha; 
}  