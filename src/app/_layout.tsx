import { Slot } from 'expo-router';
import Initializer, { preInitialize } from 'contexts/initializer';

import 'assets/global.css';
import 'react-native-reanimated';

(async () => await preInitialize())();

const RootLayout = () => {
  return (
    <Initializer>
      <Slot />
    </Initializer>
  );
};

export default RootLayout;
