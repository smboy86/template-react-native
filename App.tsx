import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { persistReducer } from 'redux-persist'; // type error 해결을 위해 임시로 import 근데 얘도 어차피 빨간..ㅎ ;
import { PersistGate } from 'redux-persist/lib/integration/react';

import store, { persistor } from './src/store';
import ErrorBoundary from './src/components/ErrorBoundary';
import RootNavigator from './src/navigation/RootNavigator';
// import NotifManager from './src/utils/NotifManager';

export default function App() {
  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <StatusBar barStyle="light-content" />
        <Provider {...{ store }}>
          <PersistGate loading={null} {...{ persistor }}>
            <RootNavigator />
          </PersistGate>
        </Provider>
        {/* <NotifManager /> */}
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}
