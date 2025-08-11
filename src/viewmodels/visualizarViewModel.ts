import { useEffect, useState } from "react";
import { Alert, ToastAndroid } from "react-native";
import { mostraCompra, excluiCompra } from "../models/formularioModel";

export function visualizarViewModel({ navigation }: any) {

  function handleExcluir(id: number) {
    Alert.alert(
      "Confirmar Exclusão",
      "Tem certeza que deseja excluir esta compra?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          onPress: async () => {
            try {
              await excluiCompra(id);
              ToastAndroid.show("Compra excluída com sucesso!", ToastAndroid.SHORT);
              navigation.goBack();
            } catch (error) {
              console.error("Erro ao excluir:", error);
              ToastAndroid.show("Erro! Tente novamente.", ToastAndroid.SHORT);
            }
          },
        },
      ]
    );
  }

  function getStatusInfo(status: number) {
    switch (status) {
      case 1:
        return { text: "Pago", color: "#13C782" };
      case 2:
        return { text: "Andamento", color: "#FFA500" };
      case 3:
      default:
        return { text: "Atrasado", color: "#FB4646" };
    }
  }

  return { handleExcluir, getStatusInfo };
}
