import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../redux/reducers/themeReducer";
import { RootState } from "../../redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as T from "./style";

function ThemeIcon() {
    const dispatch = useDispatch();
    var theme = useSelector((state: RootState) => state.theme.theme);
    const DarkThemeIcon = require(`../../assets/icon-moon.png`);
    const LightThemeIcon = require(`../../assets/icon-sun.png`);
    const Icon = theme === "darkTheme" ? DarkThemeIcon : LightThemeIcon;

    return (
        <T.IconArea onPress={async () => {
            await AsyncStorage.setItem("theme", theme === "darkTheme" ? "lightTheme" : "darkTheme")
            dispatch(setTheme(theme === "darkTheme" ? "lightTheme" : "darkTheme"))
        }}>
            <T.Icon source={Icon} />
        </T.IconArea>
    );
}

export default ThemeIcon;