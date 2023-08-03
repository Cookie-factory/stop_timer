import React, {useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RouteList} from '~/types/navigator';
import {Pressable, Text, VStack, useDisclose} from 'native-base';
import BaseLayout from '~/components/common/layout/BaseLayout';
import Timer from '~/components/common/timer/Timer';
import TimeChangeModal from '~/components/common/modal/TimeChangeModal';

interface Props {}

/**
 *@description
 */
function TimerPage({}: Props) {
  const {navigate, goBack} = useNavigation<NavigationProp<RouteList>>();
  const {isOpen, onOpen, onClose} = useDisclose();

  const [time, setTime] = useState({
    h: 3,
    m: 15,
    s: 10,
    ms: 0,
  });

  return (
    <BaseLayout name="Timer">
      <VStack>
        <Timer
          setInitTime={setTime}
          initTime={time}
          onTimeChangeModalOpen={onOpen}
        />

        <TimeChangeModal
          isOpen={isOpen}
          onClose={onClose}
          setResultTime={setTime}
          initTime={time}
        />

        {/* 고양이 애니메이션 */}

        {/* 기록 저장 */}
      </VStack>
    </BaseLayout>
  );
}

export default TimerPage;
