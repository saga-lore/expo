import React from 'react';
import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

type Props = {
  className?: string;
};

const BackButton = ({ className }: Props) => {
  const router = useRouter();
  return (
    router.canDismiss() && (
      <Pressable onPress={() => router.back()} className={className}>
        <FontAwesome5 name="arrow-left" size={18} color="white" />
      </Pressable>
    )
  );
};
export default BackButton;
