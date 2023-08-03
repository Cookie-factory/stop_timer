import React, {useEffect, useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Box, Pressable, Text} from 'native-base';
import {RouteList} from '~/types/navigator';
import {config} from '~/utils/config';
import FilterIcon from '~/assets/icons/icon_filter.svg';

/**
 *@description
 */

function MainFilter() {
  const {navigate, goBack} = useNavigation<NavigationProp<RouteList>>();

  const [test, setTest] = useState();
  useEffect(() => {}, []);

  console.log(config.TEST);

  return (
    <Box>
      <Pressable
        w="100%"
        height="80px"
        onPress={goBack}
        borderWidth={1}
        justifyContent={'center'}
        alignItems={'center'}>
        <Text>메인 이동</Text>
      </Pressable>
      <FilterIcon />
    </Box>
  );
}

export default MainFilter;
