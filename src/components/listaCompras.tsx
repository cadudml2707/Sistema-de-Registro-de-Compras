import { useState } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import { mostraCompras } from "../models/formularioModel";
import { CardInfo } from "./cardInfo";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React from "react";

export function ListaCompras({ navigation }: { navigation: any }) {

    const [compras, setCompras] = useState<any[]>([]);

    useFocusEffect(
        React.useCallback(() => {
            async function pegaCompras() {
                const resultado = await mostraCompras();
                setCompras(resultado);
            }
            pegaCompras();
        }, [])
    );

    const [aba, setAba] = useState(1);

    function handleMudarCor(cor: number) {
        setAba(cor);
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
                    <View className="gap-4 flex-2 mt-8">
                        {compras.map((compra) => (
                            <CardInfo
                                key={compra.id}
                                nome={compra.nome}
                                preco={compra.preco}
                                dataVencimento={compra.dataVencimento}
                                status={compra.status}
                                onPress={() => navigation.navigate("Visualizar", { compra_id: compra.id })}
                            />
                        ))}
                    </View>
                )}
                {aba === 2 && (
                    <View className="gap-4 flex-2 mt-8">
                        {compras.map((compra) => (
                            compra.status === 1 && (
                                <CardInfo
                                    key={compra.id}
                                    nome={compra.nome}
                                    preco={compra.preco}
                                    dataVencimento={compra.dataVencimento}
                                    status={compra.status}
                                    onPress={() => navigation.navigate("Visualizar", { compra_id: compra.id })}
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
                    <View className="gap-4 mt-8">
                        {compras.map((compra) => (
                            compra.status === 3 && (
                                <CardInfo
                                    key={compra.id}
                                    nome={compra.nome}
                                    preco={compra.preco}
                                    dataVencimento={compra.dataVencimento}
                                    status={compra.status}
                                    onPress={() => navigation.navigate("Visualizar", { compra_id: compra.id })}
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
                    <View className="gap-4 mt-8">
                        {compras.map((compra) => (
                            compra.status === 2 && (
                                <CardInfo
                                    key={compra.id}
                                    nome={compra.nome}
                                    preco={compra.preco}
                                    dataVencimento={compra.dataVencimento}
                                    status={compra.status}
                                    onPress={() => navigation.navigate("Visualizar", { compra_id: compra.id })}
                                />
                            )
                        ))}
                    </View>
                )}
            </View>
        )
    }
}