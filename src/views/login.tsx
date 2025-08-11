import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TouchableOpacity, Text, View, TextInput } from 'react-native';
import { validaUsuario } from '../models/loginModel';
import { loginValidacao } from '../viewmodels/yup/loginValidacao';

export function Login({ navigation }: any) {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginValidacao),
    });

    const onSubmit = async (data: any) => {
        const validacao = await validaUsuario(data.email, data.senha);

        if(validacao) {
            navigation.navigate("Menu");
        }
        else {
            console.error("Usuário ou Senha Incorretos");
        }
    };

    return (
        <View className="flex-1 bg-[#141416] justify-center p-6">
            <View className="bg-white px-12 py-12 rounded-xl gap-10">
                <Text className="text-4xl font-bold text-[#111827] w-full">Login</Text>
                <View>
                    <Text className='color-[#6C7278]'>Email</Text>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                className="border border-[#EDF1F3] mt-4 rounded-xl p-4 h-16"
                                placeholder="Informe seu Email"
                                value={value}
                                onChangeText={onChange}
                            />
                        )}
                    />
                    {errors.email && (
                        <Text className="text-red-500 mt-1">{errors.email.message}</Text>
                    )}
                    <Text className='mt-2 color-[#6C7278]'>Senha</Text>
                    <Controller
                        control={control}
                        name="senha"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                className="border border-[#EDF1F3] mt-2 rounded-xl p-4 h-16"
                                placeholder="Informe sua Senha"
                                secureTextEntry
                                value={value}
                                onChangeText={onChange}
                            />
                        )}
                    />
                    {errors.senha && (
                        <Text className="text-red-500 mt-1">{errors.senha.message}</Text>
                    )}
                </View>
                <TouchableOpacity
                    className=" items-center justify-center h-16 rounded-xl bg-[#13C782]"
                    onPress={handleSubmit(onSubmit)}>
                    <Text className="text-white text-center font-semibold">Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
