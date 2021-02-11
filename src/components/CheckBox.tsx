// have to refactoring
import React from 'react';
import { ViewProps, TextStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import Colors from '../constants/Colors';
import Text from './Text';

const CheckBoxContainer = styled.TouchableOpacity``;

const ButtonBox = styled.View`
  flex-flow: row;
  align-items: center;
`;

const ButtonLeftBox = styled.View`
  width: ${(props: PropsType) => (props.noLabel ? '30' : '40')}px;
  margin-right: ${(props: PropsType) => (props.noLabel ? '0' : '2')}px;
`;

interface PropsType extends ViewProps, TextStyle {
  selected: boolean;
  onPress: Function;
  color: string;
  text: string;
  noLabel?: boolean;
  style: ViewProps;
  textStyle: TextStyle;
}

const CheckBox = ({
  selected,
  onPress,
  style,
  textStyle,
  text = '',
  noLabel = false,
  ...props
}: PropsType) => (
  <CheckBoxContainer
    activeOpacity={1}
    style={[{ flexDirection: 'row', alignItems: 'center' }, style]}
    onPress={onPress}
    {...props}>
    <ButtonBox>
      <ButtonLeftBox noLabel>
        <Ionicons
          size={33}
          color={selected ? Colors.light.tint : Colors.light.unChecked}
          name={selected ? 'ios-checkmark-circle' : 'ios-checkmark-circle-outline'}
        />
      </ButtonLeftBox>
      {noLabel ? null : <Text style={textStyle}> {text} </Text>}
    </ButtonBox>
  </CheckBoxContainer>
);

export default CheckBox;
