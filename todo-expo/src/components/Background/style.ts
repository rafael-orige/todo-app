import styled from 'styled-components/native';

import { Theme } from "../../types/Theme";

type ThemeProps = {
  theme: Theme
}

export const Container = styled.SafeAreaView<ThemeProps>`
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.backgroundColor};
`;

export const Background = styled.Image`
  position: absolute;
  top: 0;
  width: 100%;
  height: 300px;
  z-index: -1;
`;
