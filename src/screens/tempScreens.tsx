import React from 'react';
import {View, Pressable} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {LoginParamList, MainParamList, BottomTabParamList} from '../navigation/types';
import Text from '../components/Text';
import {RootContext} from '../context/RootContextProvider';

type LoginProps = StackScreenProps<LoginParamList, 'Login'>;
type MainProps = StackScreenProps<MainParamList, 'MainBottom'>;
type BottomProps = StackScreenProps<BottomTabParamList, 'TabA'>;

export const tempLoginRouteScreen = ({route, navigation}: LoginProps) => {
  const {dispatch} = React.useContext(RootContext);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text size={19}>[ Login Navigator ] </Text>
      <Text>화면 이름 - {route.name}</Text>
      <Pressable onPress={() => navigation.navigate('Join')} style={{padding: 10}}>
        <Text>Join 화면으로 으로 이동</Text>
      </Pressable>
      <Pressable onPress={() => dispatch({type: 'LOGIN'})} style={{padding: 10}}>
        <Text>로그인</Text>
      </Pressable>
    </View>
  );
};

export const tempMainModalScreen = ({route, navigation}: MainProps) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>[ Main Navigator ]</Text>
      <Text>화면 이름 - {route.name}</Text>
      <Pressable onPress={() => navigation.goBack()} style={{padding: 10}}>
        <Text>Modal 닫기</Text>
      </Pressable>
    </View>
  );
};

export const tempBottomRouteScreen = ({route, navigation}: BottomProps) => {
  const {dispatch} = React.useContext(RootContext);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>[ Main Bottom Navigator ]</Text>
      <Text>현재 탭 - {route.name}</Text>
      <Pressable onPress={() => navigation.navigate('AppModal')} style={{padding: 10}}>
        <Text>App Modal 열기</Text>
      </Pressable>
      <Pressable onPress={() => dispatch({type: 'LOGOUT'})} style={{padding: 10}}>
        <Text>로그아웃</Text>
      </Pressable>
    </View>
  );
};
