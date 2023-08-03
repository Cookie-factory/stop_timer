import React from 'react';
import {IPressableProps, Pressable} from 'native-base';

/**
 *@description center 정렬 버튼
 */
function CenterButton(props: IPressableProps) {
  return (
    <Pressable {...props} alignItems={'center'} justifyContent={'center'} />
  );
}

export default CenterButton;
