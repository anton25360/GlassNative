import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Font from 'expo-font'

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

//load product sans font
const getFonts = () => Font.loadAsync({
  'productSans-regular': require('./assets/fonts/ProductSans-Regular.ttf')
})


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (!isLoadingComplete) {
    getFonts()
    return (
      null
    )
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
