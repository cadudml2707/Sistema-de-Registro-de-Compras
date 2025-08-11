import { db } from "../database/db";
import { compras } from "./schema";
import { eq } from "drizzle-orm";

export async function cadastraCompra(
    nome: string,
    descricao: string,
    preco: number,
    dataCompra: string,
    dataVencimento: string,
    status: number) {

    try {

        const precoNumerico = parseFloat(preco.toFixed(2));

        await db.insert(compras).values({
            nome,
            descricao,
            preco: precoNumerico,
            dataCompra,
            dataVencimento,
            status,
        });
        console.log("Compra cadastrada com valor:", precoNumerico, typeof precoNumerico);
        console.log("Compra cadastrada")
    } catch (error) {
        console.error("Erro ao cadastrar compra:", error);
        throw error;
    }
}

export async function atualizaCompra(
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    dataCompra: string,
    dataVencimento: string,
    status: number
) {
    try {
        await db
            .update(compras)
            .set({
                id,
                nome,
                descricao,
                preco,
                dataCompra,
                dataVencimento,
                status,
            })
            .where(eq(compras.id, id))
            .run();
            console.log("Id no banco: ", id)
            console.log("Nome no banco: ", nome)
            console.log("Descricao no banco: ", descricao)
            console.log("Preçco no banco: ", preco)
            console.log("Compra no banco: ", dataCompra)
            console.log("Vencimento no banco: ", dataVencimento)
            console.log("Status no banco: ", status)
    } catch (error) {
        console.error("Erro ao atualizar compra:", error);
        throw error;
    }
}

export async function mostraCompras() {
    try {
        return await db.select().from(compras).all();
    } catch (error) {
        console.error("Erro ao buscar compras:", error);
        throw error;
    }
}

export async function mostraCompra(id: number) {
    try {
        console.log(`Buscando compra com ID: ${id}`);
        const resultado = await db.select()
            .from(compras)
            .where(eq(compras.id, id))
            .get();
        console.log("Resultado da query:", resultado);
        return resultado
    } catch (error) {
        console.error("Erro ao buscar compras:", error);
        throw error;
    }
}

export async function excluiCompra(id: number) {
    try {
        await db.delete(compras).where(eq(compras.id, id)).run();
    } catch (error) {
        console.error("Erro ao excluir compra:", error);
        throw error;
    }
}
