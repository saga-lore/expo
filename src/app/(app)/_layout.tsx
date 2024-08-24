import { Slot } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

const AppLayout = () => {
  // <Stack>
  //   <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  // </Stack>
  return <Slot />;
};

export default AppLayout;
