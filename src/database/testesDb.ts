import { db } from "./db";
import { usuarios } from "../models/schema";
import { eq } from "drizzle-orm";

export async function testesDb() {
  const email = "defesacivil@gmail.com";

  const existeEmail = await db.select().from(usuarios).where(eq(usuarios.email, email)).get();

  if (!existeEmail) {
    await db.insert(usuarios).values({
      email: email,
      senha: "1234", 
      nome: "Defesa Civil"
    }).run();
    console.log("Usuário criado com sucesso!");
  } else {
    console.log("Usuário já existe:");
  }
}
