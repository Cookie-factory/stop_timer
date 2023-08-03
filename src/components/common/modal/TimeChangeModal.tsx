import React, {useEffect, useRef, useState} from 'react';
import {HStack, Modal, Stack, VStack} from 'native-base';
import {colors} from '~/theme';
import WheelSelect from '../select/WheelSelect';
import RoundButton from '../button/RoundButton';
import {SetState, TimeObj} from '~/types/common';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  setResultTime: SetState<TimeObj>;
  initTime: TimeObj;
}

/**
 *@description 시간 선택 휠 샐렉터 모달 컴포넌트
 */
function TimeChangeModal({isOpen, onClose, setResultTime, initTime}: Props) {
  useEffect(() => {}, []);

  const [hourArr, setHourArr] = useState(
    new Array(99).fill(0).map((_, i) => i),
  );
  const [minArr, setMinArr] = useState(new Array(60).fill(0).map((_, i) => i));
  const [secondArr, setSecondArr] = useState(
    new Array(99).fill(0).map((_, i) => i),
  );

  const [changeTime, setChangeTime] = useState(initTime);

  const onOK = () => {
    setResultTime(prev => ({
      ...prev,
      h: changeTime.h,
      m: changeTime.m,
      s: changeTime.s,
    }));

    onClose();
  };

  return (
    <Modal isOpen={isOpen}>
      <Modal.Content w="340px" py="20px">
        <Modal.Body>
          <HStack w="100%">
            <Stack height="300px">
              <WheelSelect
                arr={hourArr}
                onSelect={selectIndex =>
                  setChangeTime(prev => ({...prev, h: selectIndex}))
                }
              />
            </Stack>

            <Stack
              height="300px"
              borderLeftWidth={1}
              borderRightWidth={1}
              borderColor={colors.gray[2]}>
              <WheelSelect
                arr={minArr}
                onSelect={selectIndex =>
                  setChangeTime(prev => ({...prev, m: selectIndex}))
                }
              />
            </Stack>

            <Stack height="300px">
              <WheelSelect
                arr={secondArr}
                onSelect={selectIndex =>
                  setChangeTime(prev => ({...prev, s: selectIndex}))
                }
              />
            </Stack>
          </HStack>
        </Modal.Body>

        <Modal.Footer>
          <VStack w="100%" space="18px">
            <RoundButton
              onPress={onOK}
              name="확인"
              color={colors.blue[3]}
              borderColor={colors.blue[3]}
            />

            <RoundButton
              onPress={onClose}
              name="취소"
              color={colors.gray[2]}
              borderColor={colors.gray[2]}
            />
          </VStack>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}

export default TimeChangeModal;
