import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './screens/Dashboard';
import PlayerPage from './screens/PlayerPage';
import Predictor from './screens/Predictor';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Player" component={PlayerPage} />
        <Stack.Screen name="Predictor" component={Predictor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
