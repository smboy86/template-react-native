import React from 'react';
import { View, Pressable } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { LoginParamList, MainParamList, BottomTabParamList } from '../navigation/types';
import Text from '../components/Text';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../slices/TempSlice';
import { RootState } from '../store/RootReducer';
import { TestNoti } from '../utils/NotificationService';

interface LoginProps extends StackScreenProps<LoginParamList, 'Login'> {}
interface MainProps extends StackScreenProps<MainParamList, 'MainBottom'> {}
interface BottomProps extends StackScreenProps<BottomTabParamList, 'TabA'> {}

export const TempLoginRouteScreen = ({ route, navigation }: LoginProps) => {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text size={19}>[ Login Navigator ] </Text>
      <Text>화면 이름 - {route.name}</Text>
      <Pressable onPress={() => navigation.navigate('Join')} style={{ padding: 10 }}>
        <Text>Join 화면으로 으로 이동</Text>
      </Pressable>
      <Pressable onPress={() => dispatch(login({ userName: 'test' }))} style={{ padding: 10 }}>
        <Text>로그인</Text>
      </Pressable>
    </View>
  );
};

export const TempMainModalScreen = ({ route, navigation }: MainProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>[ Main Navigator ]</Text>
      <Text>화면 이름 - {route.name}</Text>
      <Pressable onPress={() => navigation.goBack()} style={{ padding: 10 }}>
        <Text>Modal 닫기</Text>
      </Pressable>
    </View>
  );
};

export const TempBottomRouteScreen = ({ route, navigation }: BottomProps) => {
  const dispatch = useDispatch();
  const temp = useSelector((state: RootState) => state.temp);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>[ Main Bottom Navigator ]</Text>
      <Text>현재 탭 - {route.name}</Text>
      <Pressable onPress={() => navigation.navigate('AppModal')} style={{ padding: 10 }}>
        <Text>App Modal 열기</Text>
      </Pressable>
      <Pressable onPress={() => console.log('aaa')} style={{ padding: 10 }}>
        <Text>local MSG</Text>
      </Pressable>
      <Pressable onPress={() => dispatch(logout())} style={{ padding: 10 }}>
        <Text>로그아웃</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          TestNoti();
        }}
        style={{ padding: 10 }}>
        <Text>테스트 알람 보내기</Text>
      </Pressable>
    </View>
  );
};
