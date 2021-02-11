import * as React from 'react';
import { Pressable, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

import Text from './Text';

const Container = styled.View`
  width: 100%;
  margin-bottom: ${(props) => (props.noMargin ? 0 : 14)}px;
`;

const InputBox = styled.View`
  flex-direction: row;
`;

const Textinput = styled.TextInput`
  flex-grow: 1;
  height: 46px;
  padding: 8px 15px;
  margin-right: 6px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
`;

const Btn = styled(Pressable)`
  justify-content: center;
  padding: 0 8px;
  background-color: #138dc5;
  border: 0px;
  border-radius: 4px;
`;

interface Props extends TextInputProps {
  label?: string;
  btnLabel?: string;
  btnOnPress?: Function;
  noMargin?: string;
}

export default function TextInputwithLabel(props: Props) {
  const { label, btnLabel, btnOnPress, noMargin } = props;

  return (
    <Container noMargin={noMargin !== undefined}>
      {label === undefined || label.length <= 0 ? null : (
        <Text bold size={16} color={'#3A3A3A'} style={{ paddingBottom: 6, paddingLeft: 6 }}>
          {label}
        </Text>
      )}
      <InputBox>
        <Textinput
          {...props}
          placeholderTextColor="#65747B"
          textAlignVertical="center"
          style={{ paddingVertical: 0 }}
        />
        {btnLabel === undefined ? null : (
          <Btn onPress={btnOnPress}>
            <Text bold size={17} color={'#fff'} style={{ letterSpacing: -0.5 }}>
              {btnLabel}
            </Text>
          </Btn>
        )}
      </InputBox>
    </Container>
  );
}
