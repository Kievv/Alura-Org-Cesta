import { SafeAreaView, StatusBar, View } from 'react-native';
import Cesta from './src/screens/Cesta/Cesta.js';
import mock from './src/mocks/cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function App() {
  const [fonteCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <View />;
  }
  return (
    <SafeAreaView>
      <Cesta {...mock} topo={mock.topo} detalhes={mock.detalhes} />
      <StatusBar />
    </SafeAreaView>
  );
}
