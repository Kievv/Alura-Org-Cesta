import { SafeAreaView, StatusBar} from 'react-native';
import Cesta from './src/screens/Cesta'

export default function App() {
  return (
    <SafeAreaView>
      <Cesta />
      <StatusBar/>
    </SafeAreaView>
  );
}
