import { Text, View } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export function CardPendentes() {
    return (
        <View className="bg-[#FB4646] p-6 gap-2 rounded-2xl">
            <View className='flex-row'>
                <FontAwesome6 className="bg-[#141416] p-3 rounded-2xl" name="arrow-trend-down" size={25} color="#FB4646" />
                <Text className='text-white text-5xl font-bold ml-auto'>5</Text>
            </View>
            <Text className='text-white self-end'>-198,00</Text>
            <Text className='text-white'>Contas pendentes</Text>
        </View>
    )
}