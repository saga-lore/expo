import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Emoji } from 'components/core/Emoji';

const SelectCountry = () => {
  return (
    <View className="flex-row items-center justify-center gap-x-1 px-2">
      <Emoji name="eg" />
      <Text className="text-white">+20</Text>
      <Ionicons name="chevron-down" size={18} color="white" />
    </View>
  );
};

export default SelectCountry;
