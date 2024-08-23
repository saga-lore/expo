import React, { forwardRef } from 'react';
import { TextInput } from 'react-native';

import SelectCountry from '../select/SelectCountry';
import { Input } from './Input';

type Props = React.ComponentProps<typeof Input>;

export const PhoneInput = forwardRef<TextInput, Props>((props, ref) => {
  return <Input ref={ref} label="Phone Number" placeholder="Enter Your Number" preElement={<SelectCountry />} />;
});

PhoneInput.displayName = 'PhoneInput';
