import { Text, View, TouchableOpacity, TextInput, ScrollView, ToastAndroid, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { mostraCompra } from '../models/formularioModel';

import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { visualizarViewModel } from '../viewmodels/visualizarViewModel';

export function Visualizar({ navigation, route }: any) {

    const compra_id = route.params?.compra_id;
    const [compra, setCompra] = useState<any>(null);

    useEffect(() => {
        async function carregarDados() {
            if (compra_id) {
                console.log("Buscando compra ID:", compra_id);
                const dados = await mostraCompra(compra_id);
                console.log("Dados retornados:", dados);
                setCompra(dados);
            }
        }
        carregarDados();
    }, [compra_id]);

    const { handleExcluir, getStatusInfo } = visualizarViewModel({ navigation });

  if (!compra) {
    return (
      <View className="flex-1 bg-[#141416] justify-center items-center">
        <Text className="text-white">Falha ao carregar! Volte ao Menu Principal</Text>
      </View>
    );
  }

  const { text: statusText, color: statusColor } = getStatusInfo(compra.status);

  return (
    <ScrollView className="flex-1 bg-[#141416]">
      <View className="flex-1 bg-[#141416] p-6 gap-6">
        <Text className="text-2xl font-bold text-[#E0E0E0]">{compra.nome}</Text>
        <View>
          <Text className="text-[#E0E0E0]">Nome do Produto</Text>
          <View className="bg-[#262429] border-b border-[#999999] mt-4 rounded-t-xl flex-row items-center h-16 pr-6">
            <Text className="flex-1 text-white p-4">{compra.nome}</Text>
            <Feather name="box" size={24} color="#999999" />
          </View>
        </View>
        <View>
          <Text className="text-[#E0E0E0]">Descrição do Produto</Text>
          <View className="bg-[#262429] border-b border-b-[#999999] mt-4 rounded-t-xl flex-row items-start h-24 pr-6">
            <Text className="flex-1 text-white p-4">{compra.descricao}</Text>
            <Ionicons className="pt-4" name="chatbox-ellipses" size={24} color="#999999" />
          </View>
        </View>
        <View>
          <Text className="text-[#E0E0E0]">Preço do Produto</Text>
          <View className="bg-[#262429] border-b border-[#999999] mt-4 rounded-t-xl flex-row items-center h-16 pr-6">
            <Text className="flex-1 text-white p-4">{compra.preco}</Text>
            <MaterialIcons name="attach-money" size={24} color="#999999" />
          </View>
        </View>
        <Text className="text-2xl font-bold text-[#E0E0E0]">Dados de Pagamento</Text>
        <View>
          <Text className="text-[#E0E0E0]">Data da Compra</Text>
          <View className="bg-[#262429] border-b border-[#999999] mt-4 rounded-t-xl flex-row items-center h-16 pr-6">
            <Text className="flex-1 text-white p-4">{compra.dataCompra}</Text>
            <Ionicons name="calendar-clear" size={24} color="#999999" />
          </View>
        </View>
        <View>
          <Text className="text-[#E0E0E0]">Data de Vencimento</Text>
          <View className="bg-[#262429] border-b border-[#999999] mt-4 rounded-t-xl flex-row items-center h-16 pr-6">
            <Text className="flex-1 text-white p-4">{compra.dataVencimento}</Text>
            <Ionicons name="calendar-clear" size={24} color="#999999" />
          </View>
        </View>
        <View>
          <Text className="text-2xl font-bold text-[#E0E0E0]">Status</Text>
          <View className="bg-[#262429] border-b border-[#999999] mt-4 rounded-t-xl flex-row items-center h-16 pr-6">
            <Text className="flex-1 text-white p-4" style={{ color: statusColor }}>
              {statusText}
            </Text>
          </View>
        </View>
        <View className="flex-row gap-4">
          <TouchableOpacity
            onPress={() => navigation.navigate("Editar", { compra_id: compra.id })}
            className="flex-1 items-center justify-center h-16 rounded-xl bg-[#13C782]"
          >
            <Text className="text-white text-center font-semibold">Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleExcluir(compra.id)}
            className="flex-1 items-center justify-center h-16 rounded-xl bg-[#FB4646]"
          >
            <Text className="text-white text-center font-semibold">Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}