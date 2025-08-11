import { Text, View } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { comprasPagasPreco, comprasPagasQtd } from '../models/cardModel';

export function CardPagos() {

    const [qtd, setQtd] = useState<any>();
    const [total, setTotal] = useState<any>();

    useFocusEffect(
        React.useCallback(() => {
            const qtd = comprasPagasQtd();
            const total = comprasPagasPreco();
            setQtd(qtd);
            setTotal(total);
        }, [])
    )

    return (
        <View className="bg-[#11C884] p-6 gap-2 rounded-2xl">
            <View className='flex-row'>
                <FontAwesome6 className="bg-[#141416] p-3 rounded-2xl" name="arrow-trend-up" size={25} color="#11C884" />
                <Text className='text-white text-5xl font-bold ml-auto'>{qtd}</Text>
            </View>
            <Text className='text-white self-end'>R$ {total}</Text>
            <Text className='text-white'>Contas pagas</Text>
        </View>
    )
}