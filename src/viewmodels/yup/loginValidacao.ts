import * as yup from 'yup';

export const loginValidacao = yup.object({
    email: yup.string().email("Email invalido!").required("O Email é obrigatório!"),
    senha: yup.string().min(4, "A senha deve ter no mínimo 4 caracteres").required("A senha é obrigatória!"),
});