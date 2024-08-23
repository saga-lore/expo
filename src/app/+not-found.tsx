import { Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View className="flex-1 items-center justify-center">
        <Text className="font-extrabold text-9xl">404</Text>
        <Text>This screen doesn't exist.</Text>

        <Link className="bg-slate-300 p-3 mt-4" href="/_sitemap">
          <Text>Check Stitemap</Text>
        </Link>
      </View>
    </>
  );
}
