import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";

import { NavigationType } from "../../types/Routes";

import ThemeIcon from "../ThemeIcon";

import * as H from "./style";

function Header() {
    const navigation = useNavigation<NavigationType["navigation"]>();
    const routes = useRoute();

    const screen = routes.name;
    const [token, setToken] = useState("");
    const [logged, setLogged] = useState(false);

    async function Logout() {
        await AsyncStorage.removeItem("user_id");
        await AsyncStorage.removeItem("token");
        setToken("");
        navigation.navigate('Login');
    }

    function navigate() {
        if (screen === "Todos") {
            navigation.navigate("UserArea")
        } else if (screen === "UserArea") {
            navigation.navigate("Todos")
        } else return
    }

    useEffect(() => {
        async function checkLogged() {
            await AsyncStorage.getItem("token").then(res => {
                if (res) setToken(res);
            })
        }


        checkLogged();
    }, []);

    useEffect(() => {
        if (token !== "") setLogged(true);
        else setLogged(false);
    }, [token])
    return (
        <H.HeaderArea logged={logged}>
            <H.Title>T O D O</H.Title>
            <H.UserArea>
                <ThemeIcon />
                {logged &&
                    <>
                        <H.UserAreaTouchable onPress={navigate}>
                            <H.UserAreaText>{screen === "Todos" ? "Account" : "Todos"}</H.UserAreaText>
                        </H.UserAreaTouchable>
                        <H.UserAreaTouchable onPress={() => {
                            setLogged(false);
                            Logout();
                        }}>
                            <H.UserAreaText>Logout</H.UserAreaText>
                        </H.UserAreaTouchable>
                    </>
                }
            </H.UserArea>
        </H.HeaderArea >
    );
}

export default Header;