import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import MeuBotao from './componentes/MeuBotao';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Open up App.tsx to start working on your app!</Text>
      <MeuBotao titulo="APERTE-ME" onPress={()=>{Alert.alert("Botão clicado")}}></MeuBotao>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#123',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 10,
    margin: 10,
    padding: 20,
  },
  titulo: {
    color: '#090',
    fontSize: 50,
  },
});
