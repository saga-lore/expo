import React from 'react';
import { Pressable } from 'react-native';
import Text from 'components/ui/text/Text';
import { clx } from 'utils/clx';

type Props = {
  className?: string;
  text?: React.ComponentProps<typeof Text>;
};

const LanguageSelector = ({ className, text, ...props }: Props) => {
  return (
    <Pressable className={clx(className)} {...props}>
      <Text className="text-white" size="xl">
        العربية
      </Text>
    </Pressable>
  );
};

export default LanguageSelector;
