import React from 'react';
import {IInputProps, IStackProps, Stack} from 'native-base';
import {StyleSheet, TextInput} from 'react-native';
import {colors} from '~/theme';

interface Props extends IInputProps {
  stackStyle?: IStackProps;
}

/**
 *@description border bottom style text input
 */
function BorderBottomInput({stackStyle, ...props}: Props) {
  const activeStyle =
    props.value && props.value.length > 0 ? styles.active : styles.disabled;
  return (
    <Stack style={[activeStyle, props.style]}>
      <TextInput
        style={styles.input}
        placeholder="이름"
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </Stack>
  );
}

export default BorderBottomInput;

const styles = StyleSheet.create({
  input: {
    height: 37,
  },
  active: {
    marginTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[5],
  },
  disabled: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[3],
  },
});
