import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import Bussiness from './src/screens/Bussiness';
import Designs from './src/screens/Designs';
import Home from './src/screens/Home';
import ToutorDetails from './src/screens/ToutorDetails';
import Toutor from './src/screens/Toutors';
import Videos from './src/screens/Videos';
import Text from './src/share/Text/Text';
import { colors } from './src/theme/colors';

export default function App() {

  const Stack = createNativeStackNavigator();

  const [loaded] = useFonts({
    ptSans_regular: require('./assets/fonts/PTSans-Regular.ttf'),
    ptSans_bold: require('./assets/fonts/PTSans-Bold.ttf')
  })


  if (!loaded) {
    <Text>Fonts is Loading...</Text>
  }

  //change app color
  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.white
    }
  }

  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Toutor" component={Toutor} options={{ headerShown: false }} />
        <Stack.Screen name="Bussiness" component={Bussiness} options={{ headerShown: false }} />
        <Stack.Screen name="Videos" component={Videos} options={{ headerShown: false }} />
        <Stack.Screen name="Designs" component={Designs} options={{ headerShown: false }} />
        <Stack.Screen name="ToutorDetail" component={ToutorDetails} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
