import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import RootContextProvider from './src/context/RootContextProvider';
import ErrorBoundary from './src/components/ErrorBoundary';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <RootContextProvider>
      <SafeAreaProvider>
        <ErrorBoundary>
          <StatusBar barStyle="light-content" />
          <RootNavigator />
        </ErrorBoundary>
      </SafeAreaProvider>
    </RootContextProvider>
  );
}
