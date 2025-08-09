import { Text, View } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { CardPagos } from '../components/cardPagos';
import { CardPendentes } from '../components/cardPendentes';

export function Menu() {

  return (
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
      <View>
        <View className='flex-row border border-white p-2'>
          <Text>Todas</Text>
          <Text>Pagas</Text>
          <Text>Atrasadas</Text>
          <Text>Andamento</Text>
        </View>
      </View>
    </View>
  );
}
