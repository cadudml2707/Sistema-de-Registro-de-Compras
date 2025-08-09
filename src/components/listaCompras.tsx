import { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export function ListaCompras() {

    const [aba, setAba] = useState(1);

    function handleMudarCor(cor: number) {
        switch (cor) {
            case 1:
                setAba(1);
                break;
            case 2:
                setAba(2);
                break;
            case 3:
                setAba(3);
                break;
            case 4:
                setAba(4);
                break;
        }
    }

    return (
        <View>
            <View className='flex-row border-b-2 border-b-[#13C782] p-2 justify-between'>
                <TouchableOpacity onPress={() => handleMudarCor(1)}>
                    <Text className="text-lg" style={{ color: aba === 1 ? '#13C782' : '#E0E0E09E', }}>Todas</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMudarCor(2)}>
                    <Text className="text-lg" style={{ color: aba === 2 ? '#13C782' : '#E0E0E09E', }}>Pagas</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMudarCor(3)}>
                    <Text className="text-lg" style={{ color: aba === 3 ? '#13C782' : '#E0E0E09E', }}>Atrasadas</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMudarCor(4)}>
                    <Text className="text-lg" style={{ color: aba === 4 ? '#13C782' : '#E0E0E09E', }}>Andamento</Text>
                </TouchableOpacity>
            </View>
            {aba === 1 && (
                <View className="gap-4 flex-2">
                    <Text className="mt-8 text-lg" style={{ color: '#A2A2A2' }}>Histórico do dia (data)</Text>
                    <View className="flex-row justify-between p-6  gap-2 rounded-2xl" style={{ backgroundColor: '#262429' }}>
                        <View className="flex-row gap-10">
                            <FontAwesome5 name="receipt" size={30} color="white" />
                            <View>
                                <Text className="font-bold text-white text-lg">Nome</Text>
                                <Text className="text-base" style={{ color: '#C1C1C1' }}>Preço</Text>
                                <Text className="text-white text-sm mt-4">vencimento:(data)</Text>
                            </View>
                        </View>
                        <Text className="font-bold text-lg" style={{ color: '#13C782' }}>pagar</Text>
                    </View>
                    <Text className="mt-8 text-lg" style={{ color: '#A2A2A2' }}>Histórico do dia (data)</Text>
                    <View className="flex-row justify-between p-6 bg-[#11C884] gap-2 rounded-2xl">
                        <View className="flex-row gap-10">
                            <FontAwesome5 name="receipt" size={30} color="white" />
                            <View>
                                <Text className="font-bold text-white text-lg">Nome</Text>
                                <Text className="text-base text-white">Preço</Text>
                            </View>
                        </View>
                        <Text className="font-bold text-lg text-white">pago</Text>
                    </View>
                    <Text className="mt-8 text-lg" style={{ color: '#A2A2A2' }}>Histórico do dia (data)</Text>
                    <View className="flex-row justify-between p-6 bg-[#FB4646] gap-2 rounded-2xl">
                        <View className="flex-row gap-10">
                            <FontAwesome5 name="receipt" size={30} color="white" />
                            <View>
                                <Text className="font-bold text-white text-lg">Nome</Text>
                                <Text className="text-base text-white">Preço</Text>
                                <Text className="text-white text-sm mt-4">Atrasada</Text>
                            </View>
                        </View>
                        <Text className="font-bold text-lg text-white">pago</Text>
                    </View>
                </View>
            )}
            {aba === 2 && (
                <View className="gap-4">
                    <Text className="mt-8 text-lg" style={{ color: '#A2A2A2' }}>Histórico do dia (data)</Text>
                    <View className="flex-row justify-between p-6 bg-[#11C884] gap-2 rounded-2xl">
                        <View className="flex-row gap-10">
                            <FontAwesome5 name="receipt" size={30} color="white" />
                            <View>
                                <Text className="font-bold text-white text-lg">Nome</Text>
                                <Text className="text-base text-white">Preço</Text>
                            </View>
                        </View>
                        <Text className="font-bold text-lg text-white">pago</Text>
                    </View>
                </View>
            )}
            {aba === 3 && (
                <View className="gap-4">
                    <Text className="mt-8 text-lg" style={{ color: '#A2A2A2' }}>Histórico do dia (data)</Text>
                    <View className="flex-row justify-between p-6 bg-[#FB4646] gap-2 rounded-2xl">
                        <View className="flex-row gap-10">
                            <FontAwesome5 name="receipt" size={30} color="white" />
                            <View>
                                <Text className="font-bold text-white text-lg">Nome</Text>
                                <Text className="text-base text-white">Preço</Text>
                                <Text className="text-white text-sm mt-4">Atrasada</Text>
                            </View>
                        </View>
                        <Text className="font-bold text-lg text-white">pago</Text>
                    </View>
                </View>
            )}
            {aba === 4 && (
                <View className="gap-4">
                    <Text className="mt-8 text-lg" style={{ color: '#A2A2A2' }}>Histórico do dia (data)</Text>
                    <View className="flex-row justify-between p-6  gap-2 rounded-2xl" style={{ backgroundColor: '#262429' }}>
                        <View className="flex-row gap-10">
                            <FontAwesome5 name="receipt" size={30} color="white" />
                            <View>
                                <Text className="font-bold text-white text-lg">Nome</Text>
                                <Text className="text-base" style={{ color: '#C1C1C1' }}>Preço</Text>
                                <Text className="text-white text-sm mt-4">vencimento:(data)</Text>
                            </View>
                        </View>
                        <Text className="font-bold text-lg" style={{ color: '#13C782' }}>pagar</Text>
                    </View>
                </View>
            )}
        </View>
    )
}