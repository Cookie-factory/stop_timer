import React, {useEffect, useRef, useState} from 'react';
import {Pressable, Text, VStack} from 'native-base';
import dayjs from 'dayjs';
import SVG from '~/components/common/icon';
import {colors} from '~/theme';
import {SetState, TimeObj} from '~/types/common';

interface Props {
  initTime: TimeObj;
  setInitTime: SetState<TimeObj>;
  onTimeChangeModalOpen: () => void;
}

/**
 *@description
 */
function Timer({initTime, setInitTime, onTimeChangeModalOpen}: Props) {
  const [status, setStatus] = useState<'DEFAULT' | 'READY' | 'START' | 'PAUSE'>(
    'DEFAULT',
  );

  const [startTime, setStartTime] = useState<dayjs.Dayjs>();
  const [currentTime, setCurrentTime] = useState<dayjs.Dayjs>();
  const [time, setTime] = useState(initTime);
  const timerInterval = useRef(0);

  const onToggle = () => {
    if (status === 'DEFAULT') setStatus('READY');
    else if (status === 'START') setStatus('PAUSE');
    else if (status === 'PAUSE') setStatus('START');
  };

  const onInit = () => {
    setStartTime(
      dayjs().add(time.h, 'hour').add(time.m, 'minute').add(time.s, 'second'),
    );
  };
  const onPlay = () => {
    timerInterval.current = setInterval(() => {
      // 목표 시간과의 차이를 계산합니다.
      if (startTime) {
        const diff = startTime.diff(dayjs());

        console.log(diff);

        if (diff <= 0) {
          // 타이머가 끝났을 때 처리할 내용을 여기에 추가하세요.
          clearInterval(timerInterval.current);
        } else {
          // 타이머를 화면에 업데이트합니다. (예: 콘솔에 남은 시간 출력)
          setCurrentTime(dayjs(diff));
        }
      }
    }, 1);
  };

  const onPause = () => {
    clearInterval(timerInterval.current);
  };

  const onReset = () => {
    clearInterval(timerInterval.current);
  };

  useEffect(() => {
    if (status === 'READY') {
      onInit();
      setStatus('START');
    } else if (status === 'START') {
      onPlay();
    } else {
      onPause();
    }
  }, [status]);

  return (
    <VStack>
      <Pressable onPress={onTimeChangeModalOpen}>
        <Text fontSize="36px" fontWeight="bold" color={colors.gray[5]}>
          <Text color={colors.blue[3]}>{`${
            currentTime?.hour() ?? (time.h > 9 ? time.h : `0${time.h}`)
          }`}</Text>
          <Text>:</Text>
          <Text>{`${
            currentTime?.minute() ?? (time.m > 9 ? time.m : `0${time.m}`)
          }`}</Text>
          <Text>:</Text>
          <Text>{`${
            currentTime?.second() ?? (time.s > 9 ? time.s : `0${time.s}`)
          }`}</Text>
          <Text>.</Text>
          <Text fontSize={'24px'} color={colors.gray[3]}>{`${
            currentTime?.millisecond() ?? '000'
          }`}</Text>
        </Text>
      </Pressable>

      {/* 시작 버튼 */}
      <Pressable onPress={onToggle}>
        {status === 'START' ? (
          <SVG name="icon_play" />
        ) : (
          <SVG name="icon_pause" />
        )}
      </Pressable>
    </VStack>
  );
}

export default Timer;
