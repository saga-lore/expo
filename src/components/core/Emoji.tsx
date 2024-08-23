import { memo } from 'react';
import { TextProps } from 'react-native';
import CountryFlag from 'react-native-country-flag';

const Emoji = memo(({ name, ...props }: { name: string } & TextProps) => {
  return (
    // <Text allowFontScaling={false} {...props}>
    <CountryFlag isoCode={name} size={20} />
    // </Text>
  );
});

Emoji.displayName = 'Emoji';

export { Emoji };
