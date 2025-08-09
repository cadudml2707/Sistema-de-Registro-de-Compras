import { db } from "./db";
import { usuarios } from "../models/schema";

export async function testesDb() {
  await db.insert(usuarios).values({
    email: "defesa.adm@gmail.com",
    senha: "1234",
    nome: "Defesa Civil"
  });

  const results = await db.select().from(usuarios).all();
  console.log(results);
}
