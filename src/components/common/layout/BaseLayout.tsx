import React, {ReactElement} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import Header from '../header/Header';
import {APP_HEIGHT} from '~/utils/dimension';
import {VStack} from 'native-base';

interface Props {
  name: string;
  children: ReactElement;
}

/**
 *@description base layout
 */
function BaseLayout({name, children}: Props) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <VStack px="40px">
        <Header name={name} />

        {children}
      </VStack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#fff',
    height: APP_HEIGHT,
  },
});

export default BaseLayout;
