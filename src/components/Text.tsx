import React from 'react';
import {Text} from 'react-native';

type TextProps = {
  size: number;
};
export default function (props: any) {
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
