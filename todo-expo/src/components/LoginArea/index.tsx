import React, { useEffect, useState } from "react";
import { Platform, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { NavigationType } from "../../types/Routes";

import Background from "../Background";
import * as L from "./style";

import Login from "./Login";
import SignUp from "./SignUp";

function LoginArea() {
    const navigation = useNavigation<NavigationType["navigation"]>();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
    });
    const [changeForm, setChangeForm] = useState(false);

    const [warning, setWarning] = useState({ status: false, warning: "" });

    useEffect(() => {
        async function checkLogin() {
            setLoading(true);
            let token = await AsyncStorage.getItem("token");
            let id = await AsyncStorage.getItem("user_id");

            if (token && id) {
                navigation.navigate("Todos");
            }
            setLoading(false);
        };

        checkLogin();
    }, [])

    return (
        <>
            <Modal
                visible={warning.status}
                transparent
                animationType='fade'
            >
                <L.WarningBackground>
                    <L.WarningArea>
                        <L.WarningTextArea>
                            <L.WarningText>
                                {warning.warning}
                            </L.WarningText>
                        </L.WarningTextArea>

                        <L.WarningButtonArea>
                            <L.WarningButton
                                title="Close Window"
                                onPress={() => setWarning({ status: false, warning: "" })}
                            />
                        </L.WarningButtonArea>
                    </L.WarningArea>
                </L.WarningBackground>
            </Modal>
            <Background>
                <L.Page
                    behavior={Platform.OS === 'ios' ? undefined : "height"}
                    changeSize={changeForm ? 70 : 50}>
                    <L.Form>
                        {!changeForm ? (
                            <Login
                                user={user}
                                setUser={setUser}
                                setChangeForm={setChangeForm}
                                warning={warning}
                                setWarning={setWarning}
                            />
                        ) : (
                            <SignUp
                                user={user}
                                setUser={setUser}
                                setChangeForm={setChangeForm}
                                warning={warning}
                                setWarning={setWarning}
                            />
                        )}
                    </L.Form>
                </L.Page>
            </Background>
        </>
    );
}

export default LoginArea;