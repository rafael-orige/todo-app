import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RoutesStackParamList } from "../types/Routes";

import Login from "../pages/Login";
import Todo from "../pages/Todo";
import User from "../pages/User";

const MainStack = createStackNavigator<RoutesStackParamList>()

export default () => (
    <MainStack.Navigator screenOptions={{
        headerStyle: {
            height: 0,
            opacity: 0
        }
    }}>
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Todos" component={Todo} />
        <MainStack.Screen name="UserArea" component={User} />
    </MainStack.Navigator>
);