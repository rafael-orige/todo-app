import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { GlobalTheme } from "./LayoutPatterns";

import { store } from "./todo-expo/src/redux/store";
import { setTheme } from './todo-expo/src/redux/reducers/themeReducer';
import { RootState } from './todo-expo/src/redux/store';

import { GlobalThemeType } from "./todo-expo/src/types/Theme";
import MainStack from "./todo-expo/src/navigators/MainStack";


export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

function Navigation() {
  const [fontLoaded] = useFonts({
    'JosefinSans': require("./assets/fonts/JosefinSans.ttf"),
    'JosefinSansBold': require("./assets/fonts/JosefinSans-Bold.ttf")
  })


  const dispatch = useDispatch()
  var theme: string = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    async function getTheme() {
      let themeStored = await AsyncStorage.getItem("theme");
      if (themeStored) {
        dispatch(setTheme(themeStored))
      } else return
    }
    getTheme();
  })



  if (fontLoaded) return (
    <NavigationContainer>
      <ThemeProvider theme={GlobalTheme[theme as keyof GlobalThemeType]}>
        <MainStack />
      </ThemeProvider>
    </NavigationContainer>
  )
  else return <AppLoading />
}
