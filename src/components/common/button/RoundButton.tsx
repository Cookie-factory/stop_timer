import React, {useMemo} from 'react';
import {IPressableProps, Text} from 'native-base';
import {colors} from '~/theme';
import CenterButton from './CenterButton';

interface Props extends IPressableProps {
  name: string;
  disabled?: boolean;
}

/**
 *@description 라운드 버튼
 */
function RoundButton({name, disabled, ...props}: Props) {
  const color = useMemo(
    () => (disabled ? colors.gray[3] : colors.gray[5]),
    [disabled],
  );
  return (
    <CenterButton
      w="100%"
      h="38px"
      borderRadius={16}
      borderWidth={1}
      disabled={disabled}
      borderColor={color}
      {...props}>
      <Text color={color}>{name}</Text>
    </CenterButton>
  );
}

export default RoundButton;
