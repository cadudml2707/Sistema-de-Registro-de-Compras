import { Text, View } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export function CardPagos() {
    return (
        <View className="bg-[#11C884] p-6 gap-2 rounded-2xl">
            <View className='flex-row'>
                <FontAwesome6 className="bg-[#141416] p-3 rounded-2xl" name="arrow-trend-up" size={25} color="#11C884" /> 
                <Text className='text-white text-5xl font-bold ml-auto'>10</Text>
            </View>
            <Text className='text-white self-end'>300,00</Text>
            <Text className='text-white'>Contas pagas</Text>
        </View>
    )
}