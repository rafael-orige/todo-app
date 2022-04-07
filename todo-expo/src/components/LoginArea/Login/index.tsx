import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import * as User from "../../../services/user";

import { NavigationType } from "../../../types/Routes";

import {
    Title,
    Submit,
    Input,
    SubmitText,
    ChangeFormArea,
    ChangeForm,
    LoadingAnimation,
} from "../style";

type Props = {
    user: { name: string, email: string, password: string, repeatPassword: string },
    setUser: React.Dispatch<React.SetStateAction<{ name: string, email: string, password: string, repeatPassword: string }>>,
    setChangeForm: React.Dispatch<React.SetStateAction<boolean>>,
    warning: { status: boolean, warning: string },
    setWarning: React.Dispatch<React.SetStateAction<{ status: boolean, warning: string }>>
}

function Login({ user, setChangeForm, setUser, warning, setWarning }: Props) {
    const navigation = useNavigation<NavigationType["navigation"]>();
    const [loading, setLoading] = useState(false);

    async function LoginUser() {
        let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (regex.test(user.email)) {
            setLoading(true);
            if (user.email !== "" && user.password !== "") {
                await User.loginUser(user.email, user.password).then(async (res) => {
                    if (res.error === "User does not exists") {
                        setWarning({ status: true, warning: "This is email is not registered" });
                    } else if (res.error === "Must verify email") {
                        setWarning({ status: true, warning: "Validate your email before logging in." });
                    } else if (res.status === true && res.token && res.id) {
                        await AsyncStorage.setItem("token", res.token);
                        await AsyncStorage.setItem("user_id", res.id.toString());
                        navigation.navigate("Todos")
                    } else {
                        setWarning({ status: true, warning: "An unidentified ocurred." });
                    }
                })
            }
        } else {
            setWarning({ status: true, warning: "Email format invalid." });
        }
        setLoading(false);
    }

    return (
        <>
            <Title>Login</Title>
            <Input
                placeholder="Email"
                value={user.email}
                onChangeText={event => {
                    setUser(user => ({ ...user, email: event }))
                }
                }
            />
            <Input
                placeholder="Password"
                value={user.password}
                secureTextEntry
                onChangeText={event => {
                    setUser(user => ({ ...user, password: event }))
                }}
            />

            <Submit disabled={loading ? true : false} onPress={LoginUser}>
                <SubmitText>{loading ? <LoadingAnimation color="white" size="small" /> : "Login"}</SubmitText>
            </Submit>
            <ChangeFormArea
                onPress={() => {
                    if (!loading) {
                        setChangeForm(true);
                    }

                }}>
                <ChangeForm>Don't have an account yet?</ChangeForm>
            </ChangeFormArea>
        </>
    );
}

export default Login;
