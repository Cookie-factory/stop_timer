import React, {useRef} from 'react';
import {ScrollView, Text} from 'native-base';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import CenterButton from '../button/CenterButton';
import {colors} from '~/theme';

interface Props {
  arr: (string | number)[];
  onSelect: (index: number) => void;
}

/**
 *@description 아이템 선택하는 휠 샐럭터 컴포넌트
 */
function WheelSelect({arr, onSelect}: Props) {
  const scrollRef = useRef();

  const onDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const boxWidth = 80;
    const selectIndex = Math.round(e.nativeEvent.contentOffset.y / boxWidth);

    onSelect(selectIndex);

    if (selectIndex < 0) return;

    if (scrollRef.current) {
      //@ts-ignore
      scrollRef.current.scrollTo({y: selectIndex * boxWidth, animated: true});
    }
  };

  return (
    <ScrollView
      ref={scrollRef}
      // onMomentumScrollEnd={}
      onScrollEndDrag={onDrag}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={0}
      decelerationRate={'fast'}>
      {arr.map((value, i) => (
        <CenterButton width="100px" height="80px" key={i.toString()}>
          <Text fontSize={'16px'} color={colors.gray[5]}>
            {value}
          </Text>
        </CenterButton>
      ))}
    </ScrollView>
  );
}

export default WheelSelect;
