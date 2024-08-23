import React from 'react';
import { Image } from 'react-native';

type Props = {
  className?: string;
};

const Logo = ({ className, ...props }: Props) => {
  return <Image source={require('assets/images/logo.png')} className={className} {...props} />;
};

export default Logo;
