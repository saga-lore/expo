import React, { forwardRef } from 'react';
import { TextInputProps as RNTextInputProps, TextInput, View } from 'react-native';
import Text from 'components/ui/text/Text';
import { clx } from 'utils/clx';

type Props = {
  label?: string;
  preElement?: React.ReactNode;
  postElement?: React.ReactNode;
} & RNTextInputProps;

export const Input = forwardRef<TextInput, Props>(({ label, preElement, postElement, className, ...props }, ref) => {
  return (
    <View className="flex-col">
      {label && (
        <Text className="text-gray-normal mb-2 font-sans" size="lg">
          {label}
        </Text>
      )}

      <View className="relative h-14 mt-1 flex-row rounded-full px-5 bg-[#ffffff08] border-gray-900">
        {preElement && (
          <View className="flex-row gap-x-2 items-center">
            {preElement}
            <View className="w-[1px] h-[80%] bg-[#313131]" />
          </View>
        )}

        <TextInput
          ref={ref}
          {...props}
          className={clx('flex-1 mx-3 placeholder:text-gray-dark text-white', className)}
        />

        {postElement && <View className="flex-row gap-x-2 items-center">{postElement}</View>}
      </View>
    </View>
  );
});

Input.displayName = 'Input';
