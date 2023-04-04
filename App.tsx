import { StatusBar, Text } from 'react-native';

import { ThemeProvider } from 'styled-components/native';

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

import { Routes } from '@routes/index';

import theme from './src/theme';


export default function App() {
  const [ fontsLoaded ] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        backgroundColor="transparent" 
        barStyle="dark-content" 
        translucent 
      />
      { fontsLoaded ? <Routes /> : <Text>Carregando</Text> }
    </ThemeProvider>
  );
}
