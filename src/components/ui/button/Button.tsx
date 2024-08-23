import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  title: string;
  onPress: () => void;
} & React.ComponentProps<typeof View>;

const Button = ({ children, title, onPress, ...rest }: Props) => {
  return (
    <View {...rest}>
      <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
    </View>
  );
};

export default Button;
