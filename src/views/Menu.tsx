import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { CardPagos } from '../components/cardPagos';
import { CardPendentes } from '../components/cardPendentes';
import { ListaCompras } from '../components/listaCompras';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Menu({ navigation }: any) {

  function handleCadastro() {
    navigation.navigate("Cadastro");
  }

  return (
    <View className='flex-1'>
      <ScrollView className='flex-1 bg-[#141416]'>
        <View className="flex-1 bg-[#141416] p-4 gap-6">
          <Text className='text-2xl font-bold text-red-500 color-white'>Atualizações</Text>
          <View className='flex-row gap-4'>
            <View className='flex-1'>
              <CardPagos />
            </View>
            <View className='flex-1'>
              <CardPendentes />
            </View>
          </View>
          <Text className='text-2xl font-bold text-red-500 color-white mt-4'>Lista de Compras</Text>
          <ListaCompras navigation={navigation} />
        </View>
      </ScrollView>
      <View className="p-6 pb-8 bg-[#141416]">
        <TouchableOpacity
          onPress={() => handleCadastro()}
          className="items-center justify-center h-16 rounded-xl bg-[#13C782]"
        >
          <Text className="text-white text-center font-semibold">Compra nova</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
