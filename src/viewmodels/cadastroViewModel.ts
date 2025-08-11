import { useState } from 'react';
import { cadastraCompra } from '../models/formularioModel';
import { ToastAndroid } from 'react-native';

export function cadastroViewModel({ navigation, setValue }: any) {
  const [status, setStatus] = useState(0);

  function handleMudarCor(cor: number) {
    setStatus(cor);
    setValue('status', cor);
  }

  async function onSubmit(data: any) {
    await cadastraCompra(
      data.nome,
      data.descricao,
      parseFloat(data.preco),
      data.dataCompra,
      data.dataVencimento,
      data.status
    );
    ToastAndroid.show('Compra cadastrada com sucesso!', ToastAndroid.SHORT);
    navigation.navigate('Menu');
  }

  return { status, handleMudarCor, onSubmit };
}
