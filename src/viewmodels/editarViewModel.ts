import { useEffect, useState } from "react";
import { Alert, ToastAndroid } from "react-native";
import { mostraCompra, atualizaCompra } from "../models/formularioModel";

export function editarViewModel({ compra_id, navigation, setValue }: any) {
    const [compra, setCompra] = useState<any>(null);
    const [status, setStatus] = useState(0);

    useEffect(() => {
        async function carregarDados() {
            if (compra_id) {
                try {
                    const dados = await mostraCompra(compra_id);
                    setCompra(dados);
                    if (dados) {
                        setValue("nome", dados.nome);
                        setValue("descricao", dados.descricao);
                        setValue("preco", dados.preco);
                        setValue("dataCompra", dados.dataCompra);
                        setValue("dataVencimento", dados.dataVencimento);
                        setValue("status", dados.status);
                        setStatus(dados.status);
                    }
                } catch (error) {
                    console.error("Erro ao carregar compra:", error);
                    Alert.alert("Erro", "Não foi possível carregar a compra.");
                }
            }
        }
        carregarDados();
    }, [compra_id, setValue]);

    function handleMudarCor(cor: number) {
        setStatus(cor);
        setValue("status", cor);
    }

    async function onSubmit(data: any) {
        try {
            await atualizaCompra(
                compra_id,
                data.nome,
                data.descricao,
                data.preco,
                data.dataCompra,
                data.dataVencimento,
                data.status
            );
            ToastAndroid.show("Compra atualizada com sucesso!", ToastAndroid.SHORT);
            navigation.navigate("Menu");
        } catch (error) {
            console.error("Erro ao atualizar compra:", error);
            Alert.alert("Erro", "Não foi possível atualizar a compra.");
        }
    }

    return {
        compra,
        status,
        handleMudarCor,
        onSubmit,
    };
}
