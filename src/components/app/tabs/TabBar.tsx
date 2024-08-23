import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export const tabs = [
  {
    name: 'index',
    icon: 'home-outline',
  },
  {
    name: 'products',
    icon: 'storefront-outline',
  },
  {
    name: 'map',
    icon: 'location-outline',
  },
  {
    name: 'profile',
    icon: 'person-outline',
  },
];

export const TabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View className="flex-row absolute bottom-[40] w-[80%] ml-[10%] bg-[#26282D] blur-3xl opacity-50 justify-evenly py-1 h-[78] rounded-full">
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const tab = tabs.find((tab) => tab.name === route.name);
        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <View className="size-full aspect-square bg-[#3B3D42] justify-center items-center rounded-full">
              <Ionicons name={tab?.icon as never} size={32} color={isFocused ? 'red' : 'white'} />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
