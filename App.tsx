import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/navigator';
import {NativeBaseProvider, theme} from 'native-base';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {queries: {retry: 2}},
});

if (__DEV__) {
  import('react-query-native-devtools').then(({addPlugin}) => {
    addPlugin({queryClient});
  });
}

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>
          <AppNavigator />
        </NativeBaseProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
