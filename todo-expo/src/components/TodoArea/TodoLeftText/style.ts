import styled from "styled-components/native";
import { Theme } from "../../../type/Theme";

type ThemeProps = {
    theme: Theme
}

export const Text = styled.Text<ThemeProps>`
    color: ${props => props.theme.notSelected};;
    font-family: "JosefinSans";
`