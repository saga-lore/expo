import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type Props = {
  children: React.ReactNode;
};

export const preInitialize = async () => {
  await SplashScreen.preventAutoHideAsync();
};

const Initializer = ({ children }: Props) => {
  const [loaded] = useFonts({
    // SpaceMono: require('assets/fonts/SpaceMono-Regular.ttf'),
    Gotham: require('assets/fonts/GothamMedium.ttf'),
    GothamBold: require('assets/fonts/Gotham-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return <GestureHandlerRootView className="flex-1">{children}</GestureHandlerRootView>;
};

export default Initializer