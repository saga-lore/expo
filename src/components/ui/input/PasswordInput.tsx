import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { Input } from './Input';

type Props = {
  label?: string;
  placeholder?: string;
};

const PasswordInput = ({ label = 'Password', placeholder = '********' }: Props) => {
  const [showPassword, setShowPassword] = React.useState(true);

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <Input
      label={label}
      placeholder={placeholder}
      secureTextEntry={showPassword}
      postElement={
        <TouchableOpacity onPress={handleShowPassword}>
          <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color="white" />
        </TouchableOpacity>
      }
    />
  );
};

export default PasswordInput;
