import { Text, View } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { comprasPendentesQtd, comprasPendentesPreco } from '../models/cardModel';

export function CardPendentes() {

    const [qtd, setQtd] = useState<any>();
    const [total, setTotal] = useState<any>();

    useFocusEffect(
        React.useCallback(() => {
            const qtd = comprasPendentesQtd();
            const total = comprasPendentesPreco();
            setQtd(qtd);
            setTotal(total);
        }, [])
    )

    return (
        <View className="bg-[#FB4646] p-6 gap-2 rounded-2xl">
            <View className='flex-row'>
                <FontAwesome6 className="bg-[#141416] p-3 rounded-2xl" name="arrow-trend-down" size={25} color="#FB4646" />
                <Text className='text-white text-5xl font-bold ml-auto'>{qtd}</Text>
            </View>
            <Text className='text-white self-end'>R$ -{total}</Text>
            <Text className='text-white'>Contas pendentes</Text>
        </View>
    )
}