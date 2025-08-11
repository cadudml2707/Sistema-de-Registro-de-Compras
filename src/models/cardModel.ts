import { db } from "../database/db";
import { compras } from "./schema";
import { eq, sql } from "drizzle-orm";

export async function comprasPagasPreco() {
    const resultado = await db.
        select({
            total: sql<number>`CAST(SUM(${compras.preco}) AS REAL)`
        }).
        from(compras).
        where(eq(compras.status, 1)).
        get();

    console.log(resultado)

    return resultado?.total ?? 0;
}

export async function comprasPendentesPreco() {
    const resultado = await db.
        select({
            total: sql<number>`CAST(SUM(${compras.preco}) AS REAL)`
        }).
        from(compras).
        where(eq(compras.status, 3)).
        get();

    console.log(resultado)

    return resultado?.total ?? 0;
}

export async function comprasPagasQtd() {
    const quantidade = await db.
        select({ quantidade: sql<number>`COUNT(*)` }).
        from(compras).
        where(eq(compras.status, 1)).
        get();

    console.log(quantidade)

    return quantidade?.quantidade ?? 0;
}

export async function comprasPendentesQtd() {
    const quantidade = await db.
        select({ quantidade: sql<number>`COUNT(*)` }).
        from(compras).
        where(eq(compras.status, 3)).
        get();

    console.log(quantidade)

    return quantidade?.quantidade ?? 0;
}