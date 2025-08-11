import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { formularioValidacao } from '../viewmodels/yup/formularioValidacao';

import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { cadastroViewModel } from '../viewmodels/cadastroViewModel';

export function Cadastro({ navigation }: any) {

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(formularioValidacao),
        defaultValues: {
            status: 0,
        }
    });

    const { status, handleMudarCor, onSubmit } = cadastroViewModel({ navigation, setValue }); 

    return (
        <ScrollView className='flex-1 bg-[#141416]'>
            <View className="flex-1 bg-[#141416] p-6 gap-6">
                <Text className='text-2xl font-bold color-[#E0E0E0]'>Registrar Nova Compra</Text>
                <View>
                    <Text className='color-[#E0E0E0]'>Nome do Produto</Text>
                    <Controller
                        control={control}
                        name="nome"
                        render={({ field: { onChange, value } }) => (
                            <View className={`
                                ${errors.nome ? 'border-red-500' : '#999999'}
                            bg-[#262429] border-b border-[#999999] mt-4 rounded-t-xl flex-row items-center h-16 pr-6`}>
                                <TextInput
                                    className="flex-1 text-white p-4"
                                    placeholder="Nome do produto"
                                    placeholderTextColor="#999999"
                                    value={value}
                                    onChangeText={onChange}
                                />
                                <Feather name="box" size={24} color={errors.nome ? '#ef4444' : '#999999'} />
                            </View>
                        )}
                    />
                    {errors.nome && (
                        <Text className="text-red-500 mt-1">{errors.nome.message}</Text>
                    )}
                </View>
                <View>
                    <Text className='color-[#E0E0E0]'>Descrição do Produto</Text>
                    <Controller
                        control={control}
                        name="descricao"
                        render={({ field: { onChange, value } }) => (
                            <View className={`
                            ${errors.descricao ? 'border-red-500' : '#999999'}
                            bg-[#262429] border-b border-b-[#999999] mt-4 rounded-t-xl flex-row items-start h-24 pr-6`}>
                                <TextInput
                                    className="flex-1 text-white p-4"
                                    placeholder="Descrição"
                                    placeholderTextColor="#999999"
                                    value={value}
                                    onChangeText={onChange}
                                />
                                <Ionicons className='pt-4' name="chatbox-ellipses" size={24} color={errors.descricao ? '#ef4444' : '#999999'} />
                            </View>
                        )}
                    />
                    {errors.descricao && (
                        <Text className="text-red-500 mt-1">{errors.descricao.message}</Text>
                    )}
                </View>
                <View>
                    <Text className='color-[#E0E0E0]'>Preço do Produto</Text>
                    <Controller
                        control={control}
                        name="preco"
                        render={({ field: { onChange, value } }) => (
                            <View className={`
                            ${errors.preco ? 'border-red-500' : '#999999'}
                            bg-[#262429] border-b border-[#999999] mt-4 rounded-t-xl flex-row items-center h-16 pr-6`}>
                                <TextInput
                                    className="flex-1 text-white p-4"
                                    placeholder="Preço do produto (ex: 5.0)"
                                    placeholderTextColor="#999999"
                                    value={value}
                                    onChangeText={(text) => {
                                        const cleaned = text.replace(/[^\d.]/g, '');
                                        onChange(cleaned);
                                    }}
                                    keyboardType='numeric'
                                />
                                <MaterialIcons name="attach-money" size={24} color={errors.preco ? '#ef4444' : '#999999'} />
                            </View>
                        )}
                    />
                    {errors.preco && (
                        <Text className="text-red-500 mt-1">{errors.preco.message}</Text>
                    )}
                </View>
                <Text className='text-2xl font-bold color-[#E0E0E0]'>Dados de Pagamento</Text>
                <View>
                    <Text className='color-[#E0E0E0]'>Data da Compra</Text>
                    <Controller
                        control={control}
                        name="dataCompra"
                        render={({ field: { onChange, value } }) => (
                            <View className={`
                            ${errors.dataCompra ? 'border-red-500' : '#999999'}
                            bg-[#262429] border-b border-[#999999] mt-4 rounded-t-xl flex-row items-center h-16 pr-6`}>
                                <TextInput
                                    className="flex-1 text-white p-4"
                                    placeholder="DD/MM/AA"
                                    placeholderTextColor="#999999"
                                    value={value}
                                    onChangeText={onChange}
                                />
                                <Ionicons name="calendar-clear" size={24} color={errors.dataCompra ? '#ef4444' : '#999999'} />
                            </View>
                        )}
                    />
                    {errors.dataCompra && (
                        <Text className="text-red-500 mt-1">{errors.dataCompra.message}</Text>
                    )}
                </View>
                <View>
                    <Text className='color-[#E0E0E0]'>Data de Vencimento</Text>
                    <Controller
                        control={control}
                        name="dataVencimento"
                        render={({ field: { onChange, value } }) => (
                            <View className={`
                            ${errors.dataVencimento ? 'border-red-500' : '#999999'}
                            bg-[#262429] border-b border-[#999999] mt-4 rounded-t-xl flex-row items-center h-16 pr-6`}>
                                <TextInput
                                    className="flex-1 text-white p-4"
                                    placeholder="DD/MM/AA"
                                    placeholderTextColor="#999999"
                                    value={value}
                                    onChangeText={onChange}
                                />
                                <Ionicons name="calendar-clear" size={24} color={errors.dataVencimento ? '#ef4444' : '#999999'} />
                            </View>
                        )}
                    />
                    {errors.dataVencimento && (
                        <Text className="text-red-500 mt-1">{errors.dataVencimento.message}</Text>
                    )}
                </View>
                <Text className='text-2xl font-bold color-[#E0E0E0]'>Status</Text>
                <View className='flex-row justify-between'>
                    <TouchableOpacity
                        onPress={() => handleMudarCor(1)}
                        className={`${status === 1 ? 'border-[#13C782]' : 'border-[#606061]'} flex-2 border border-[#13C782] items-center justify-center h-14 rounded-xl p-4 `}>
                        <Text style={{ color: status === 1 ? '#13C782' : '#606061' }}>
                            Pago
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleMudarCor(2)}
                        className={`${status === 2 ? 'border-[#13C782]' : 'border-[#606061]'} flex-2 border border-[#13C782] items-center justify-center h-14 rounded-xl p-4 `}>
                        <Text style={{ color: status === 2 ? '#13C782' : '#606061' }}>
                            Andamento
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleMudarCor(3)}
                        className={`${status === 3 ? 'border-[#13C782]' : 'border-[#606061]'} flex-2 border border-[#13C782] items-center justify-center h-14 rounded-xl p-4 `}>
                        <Text style={{ color: status === 3 ? '#13C782' : '#606061' }}>
                            Atrasado
                        </Text>
                    </TouchableOpacity>
                </View>
                {errors.status && (
                    <Text className="text-red-500 mt-1">{errors.status.message}</Text>
                )}
                <TouchableOpacity
                    onPress={handleSubmit(onSubmit)}
                    className=" items-center justify-center h-16 rounded-xl bg-[#13C782]">
                    <Text className="text-white text-center font-semibold">Salvar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}