import React, {useEffect, useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Pressable, Stack, Text} from 'native-base';
import {RouteList} from '~/types/navigator';
import {useGetMain} from '~/api/main/querires';
import CenterButton from '~/components/common/button/CenterButton';
import {APP_WIDTH} from '~/utils/dimension';
import RoundButton from '~/components/common/button/RoundButton';
import Center100View from '~/components/common/view/Center100View';
import BorderBottomInput from '~/components/common/input/BorderBottomInput';

/**
 *@description 앱 메인 페이지
 */

function Main() {
  const {navigate, goBack} = useNavigation<NavigationProp<RouteList>>();

  const getMain = useGetMain('1');

  const [test, setTest] = useState();
  useEffect(() => {}, []);

  return (
    <Stack>
      <RoundButton name="라운드" onPress={() => {}} />

      <Center100View borderWidth={1}>
        <Text>test</Text>
      </Center100View>

      <BorderBottomInput />
    </Stack>
  );
}

export default Main;
