import React from 'react';
import { VariantProps } from 'class-variance-authority';
import { clx } from 'utils/clx';

import Text from '../text/Text';
import { textStyles } from '../text/Text.styles';
import Button from './Button';

type Props = {
  className?: string;
  title: string;
  onPress: () => void;
  textProps?: {
    className?: string;
    bold?: boolean;
    size?: VariantProps<typeof textStyles>['size'];
  };
} & React.ComponentProps<typeof Button>;

const DefaultButton = ({ title, onPress, className, textProps, ...rest }: Props) => {
  return (
    <Button
      title={title}
      className={clx('bg-primary h-12 mx-auto rounded-full w-[95%] items-center justify-center', className)}
      onPress={onPress}
      {...rest}
    >
      <Text className={clx(textProps?.className)} {...textProps}>
        {title}
      </Text>
    </Button>
  );
};

export default DefaultButton;
