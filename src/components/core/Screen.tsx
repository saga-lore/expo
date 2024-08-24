import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { clx } from 'utils/clx';

import Background from './Background';

type Props = {
  className?: string;
  children: React.ReactNode;
  header?: React.ReactNode;
  background?: React.ReactNode;
};

const Screen = ({ children, header, background, className, ...props }: Props) => {
  return (
    <>
      <View className="absolute flex-1 size-full">{background || <Background />}</View>

      <ScrollView className={clx(`flex-1 relative p-4 pt-[80]`, className)} {...props}>
        {header}
        {children}
      </ScrollView>
    </>
  );
};

export default Screen;
