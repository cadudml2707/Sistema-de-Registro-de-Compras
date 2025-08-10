import { Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

type CardInfoProps = {
  nome: string;
  preco: string;
  dataVencimento: string;
  status: number;
};

export function CardInfo({
  nome,
  preco,
  dataVencimento,
  status,
  onPress
}: CardInfoProps & { onPress?: () => void }) {
  const corStatus = status === 1 ? '[#13C782]' : status === 3 ? '[#FB4646]' : '[#262429]';
  const textoStatus = status === 1 ? 'pago' : 'pagar';
  const corTexto = status === 2 ? '#13C782' : 'white';
  const corVencimento = status === 1 ? '#13C782' : 'white';

  return (
    <TouchableOpacity onPress={onPress}>
      <View className={`flex-row justify-between p-6 gap-2 rounded-2xl bg-${corStatus}`}>
        <View className="flex-row gap-10">
          <FontAwesome5 name="receipt" size={35} color="white" />
          <View>
            <Text className="font-bold text-white text-lg">{nome}</Text>
            <Text className="text-base text-white">{preco}</Text>
            <Text className={`text-sm mt-2`} style={{ color: corVencimento }}>Vencimento: {dataVencimento}</Text>
          </View>
        </View>
        <Text className="font-bold text-lg" style={{ color: corTexto }}>{textoStatus}</Text>
      </View>
    </TouchableOpacity>
  );
}