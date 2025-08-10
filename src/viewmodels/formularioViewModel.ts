import * as yup from 'yup';

export const formularioValidacao = yup.object({
    nome: yup.string().required("Informe o nome do produto"),
    descricao: yup.string().required("Informe a descrição do produto"),
    preco: yup.string().required("Informe o preço do produto"),
    dataCompra: yup.string().matches(/^\d{2}\/\d{2}\/\d{4}$/, "Use o formato DD/MM/AAAA").required("Data de compra obrigatória"),
    dataVencimento: yup.string().matches(/^\d{2}\/\d{2}\/\d{4}$/, "Use o formato DD/MM/AAAA").required("Data de vencimento obrigatória"),
    status: yup.number().required("Informe o status do produto").oneOf([1, 2, 3], 'Informe o status do produto'),
}); 