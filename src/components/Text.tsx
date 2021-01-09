import React from 'react';
import {Text} from 'react-native';

type TextProps = {};
export default function (props: TextProps) {
  const {size, color, bold, style, children, ...newProps} = props;

  // 1) font 전역 설정
  let font = {fontFamily: 'NotoSansKR-Regular', fontWeight: 'normal'};

  if (bold) {
    font = {fontFamily: 'NotoSansKR-Medium', fontWeight: 'normal'};
  }

  return (
    <Text {...newProps} style={[style, font, {fontSize: size, color}]}>
      {children}
    </Text>
  );
}
