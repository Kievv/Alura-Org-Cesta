import { SafeAreaView, StatusBar, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import Cesta from './src/screens/Cesta/Cesta.js';
import mock from './src/mocks/cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useCallback, useEffect } from 'react';

export default function App() {
  const [fonteCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (err) {
        console.warn(err);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fonteCarregada) {
      await SplashScreen.hideAsync();
    }
  }, [fonteCarregada]);

  if (!fonteCarregada) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Cesta {...mock} />
      <StatusBar />
    </SafeAreaView>
  );
}
