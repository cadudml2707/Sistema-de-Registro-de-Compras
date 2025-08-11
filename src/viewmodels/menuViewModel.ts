export function menuViewModel({ navigation }: any) {
    function handleCadastro() {
        navigation.navigate("Cadastro");
    }

    return { handleCadastro }
}