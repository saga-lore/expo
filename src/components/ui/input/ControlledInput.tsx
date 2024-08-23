import React, { ForwardedRef, forwardRef } from 'react';
import { TextInput } from 'react-native';
import { Control, FieldValues, Path, RegisterOptions, useController } from 'react-hook-form';
import useMergedRef from '@react-hook/merged-ref';

import { Input } from './Input';

type TRule = Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;

export type RuleType<T> = { [name in keyof T]: TRule };
export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
};

type Props<T extends FieldValues> = React.ComponentProps<typeof Input> & InputControllerType<T>;

export const ControlledInput = forwardRef(<T extends FieldValues>(props: Props<T>, ref: ForwardedRef<TextInput>) => {
  const { name, control, rules, ...rest } = props;
  const { field } = useController<FieldValues>({ name, control: control as Control<FieldValues>, rules });
  const { onChange, onBlur, value } = field;
  const mergedRef = useMergedRef(ref, field.ref);

  return (
    <Input
      {...rest}
      ref={mergedRef}
      onChangeText={(text) => {
        onChange(text);
        if (typeof rest.onChangeText === 'function') rest.onChangeText(text);
      }}
      onBlur={onBlur}
      value={value}
    />
  );
});

ControlledInput.displayName = 'ControlledInput';
