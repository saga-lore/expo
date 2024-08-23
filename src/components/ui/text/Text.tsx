import React from 'react';
import { Text as RNText } from 'react-native';
import { VariantProps } from 'class-variance-authority';
import { clx } from 'utils/clx';

import { textStyles } from './Text.styles';

export type TextProps = {
  bold?: boolean;
  color?: string;
} & React.ComponentProps<typeof RNText> &
  VariantProps<typeof textStyles>;

const Text = ({ className, color, children, size, bold, ...props }: TextProps) => {
  return (
    <RNText
      className={clx(
        textStyles({ size }),
        'font-gotham',
        { 'font-bold': bold },
        { [`text-${color}`]: color },
        className,
      )}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default Text;
