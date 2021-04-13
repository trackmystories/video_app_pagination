import * as React from 'react';
import {IntroWrapper, Title} from './styledComponents/Styles';
import {IntroProps} from '../types/types';

export default function Intro(props: IntroProps) {
  return (
    <IntroWrapper>
      <Title>{props.title}</Title>
    </IntroWrapper>
  );
}
