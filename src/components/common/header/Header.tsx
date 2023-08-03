import React from 'react';
import {Stack, Text} from 'native-base';

interface Props {
  name: string;
}

/**
 *@description 페이지 헤더 컴포넌트
 */
function Header({name}: Props) {
  return (
    <Stack pt="48px">
      <Text fontWeight="bold" fontSize="48px">
        {name}
      </Text>
    </Stack>
  );
}

export default Header;
