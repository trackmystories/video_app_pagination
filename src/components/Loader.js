import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import styled, {css} from 'styled-components/native';

const LoaderWrapper = styled.View`
  align-items: center;
  margin-top: 5%;
`;

export default function Loader() {
  return (
    <LoaderWrapper>
      <ActivityIndicator size="large" color="blue" />
    </LoaderWrapper>
  );
}
