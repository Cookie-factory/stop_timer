import React from 'react';
import {HStack} from 'native-base';
import {IHStackProps} from 'native-base/lib/typescript/components/primitives/Stack/HStack';

/**
 *@description 수직 정렬 Row view
 */
function AlignCenterRowView(props: IHStackProps) {
  return <HStack alignItems={'center'} {...props} />;
}

export default AlignCenterRowView;
