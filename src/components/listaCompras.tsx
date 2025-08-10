import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { mostraCompras } from "../models/formularioModel";
import { CardInfo } from "./cardInfo";

export function ListaCompras({ navigation }: any) {

    const [compras, setCompras] = useState<any[]>([]);

    useEffect(() => {
        async function pegaCompras() {
            const resultado = await mostraCompras();
            setCompras(resultado);
        }
        pegaCompras();
    }, []);

    const [aba, setAba] = useState(1);

    function handleMudarCor(cor: number) {
        setAba(cor);
    }

    function handleEditar(){
        navigation.navigate("Editar");
    }

    if (compras.length === 0) {
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
                <Text className="text-white text-center mt-6">Nenhuma compra cadastrada.</Text>
            </View>
        )
    } else {
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
                        {compras.map((compra) => (
                            <CardInfo
                                key={compra.id}
                                nome={compra.nome}
                                preco={compra.preco}
                                dataVencimento={compra.dataVencimento}
                                status={compra.status}
                            />
                        ))}
                        <Text className="mt-8 text-lg" style={{ color: '#A2A2A2' }}>Histórico do dia (data)</Text>

                        <Text className="mt-8 text-lg" style={{ color: '#A2A2A2' }}>Histórico do dia (data)</Text>

                    </View>
                )}
                {aba === 2 && (
                    <View className="gap-4 flex-2">
                        <Text className="mt-8 text-lg" style={{ color: '#A2A2A2' }}>Histórico do dia (data)</Text>
                        {compras.map((compra) => (
                            compra.status === 1 && (
                                <CardInfo 
                                key={compra.id}
                                nome={compra.nome}
                                preco={compra.preco}
                                dataVencimento={compra.dataVencimento}
                                status={compra.status}
                            />
                            )
                        ))}
                        {compras.map((compra) => (
                            compra.length === 0 && (
                                <Text className="text-white text-center mt-6">Nenhuma compra paga.</Text>
                            )
                        ))}
                    </View>
                )}
                {aba === 3 && (
                    <View className="gap-4">
                        <Text className="mt-8 text-lg" style={{ color: '#A2A2A2' }}>Histórico do dia (data)</Text>
                        {compras.map((compra) => (
                            compra.status === 3 && (
                                <CardInfo 
                                key={compra.id}
                                nome={compra.nome}
                                preco={compra.preco}
                                dataVencimento={compra.dataVencimento}
                                status={compra.status}
                            />
                            )
                        ))}
                        {compras.map((compra) => (
                            compra.length === 0 && (
                                <Text className="text-white text-center mt-6">Nenhuma compra atrasada.</Text>
                            )
                        ))}
                    </View>
                )}
                {aba === 4 && (
                    <View className="gap-4">
                        <Text className="mt-8 text-lg" style={{ color: '#A2A2A2' }}>Histórico do dia (data)</Text>
                        {compras.map((compra) => (
                            compra.status === 2 && (
                                <CardInfo 
                                key={compra.id}
                                nome={compra.nome}
                                preco={compra.preco}
                                dataVencimento={compra.dataVencimento}
                                status={compra.status}
                            />
                            )
                        ))}
                        {compras.map((compra) => (
                            compra.length === 0 && (
                                <Text className="text-white text-center mt-6">Nenhuma compra em andamento.</Text>
                            )
                        ))}
                    </View>
                )}
            </View>
        )
    }
}