/* eslint-disable no-nested-ternary */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
// import RNBootSplash from 'react-native-bootsplash';

// import LinkingConfiguration from './LinkingConfiguration';
import LoginNavigator from './LoginNavigator';
import MainNavigator from './MainNavigator';
import { RootState } from '../store/RootReducer';

export default function RootNavigator() {
  const { isLogin } = useSelector((state: RootState) => state.temp);
  const [isAppLoading, setIsAppLoading] = React.useState(true);

  // splash 를 사용하면 의미가 없는 것 아닌가? null 순간 흰 화면
  // but splash 는 2개의 네비게이터에서 각각 선언되어야 할듯
  React.useEffect(() => {
    const appLoad = async () => {
      try {
      } catch (e) {
        console.log('RootNavigator error ::: ', e);
      } finally {
        setIsAppLoading(false); // 1) 앱 로딩
      }
    };
    appLoad();
  }, [isAppLoading]);

  if (isAppLoading) return null;

  return (
    <NavigationContainer>{!isLogin ? <LoginNavigator /> : <MainNavigator />}</NavigationContainer>
  );
}
