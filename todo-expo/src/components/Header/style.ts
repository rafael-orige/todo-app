import styled from 'styled-components/native';

import { Theme } from "../../types/Theme";

type ThemeProps = {
  theme: Theme,
  logged?: boolean
}

export const HeaderArea = styled.View<ThemeProps>`
  flex-direction: ${props => props.logged ? "column" : "row"};
  width: 85%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  margin: ${props => props.logged ? "15px" : "0"};
`;

export const Title = styled.Text<ThemeProps>`
  font-size: 37px;
  color: ${props => props.theme.white};
  font-family: 'JosefinSansBold';
`;

export const UserArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
`;

export const UserAreaTouchable = styled.TouchableOpacity`
`

export const UserAreaText = styled.Text<ThemeProps>`
  color: ${props => props.theme.white};
  font-family: "JosefinSans";
  margin: 5px 10px;
`