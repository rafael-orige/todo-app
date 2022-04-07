import React, { useState, useEffect } from "react";
import { Linking } from "react-native";
import { userData } from "../../services/user"
import Background from "../Background";

import * as U from "./style";

export default function UserArea() {

    const [user, setUser] = useState({
        user_id: 0,
        user_name: "",
        user_email: "",
        user_password: ""
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUser() {
            setLoading(true);
            setUser(await userData())
            setLoading(false);
        }
        fetchUser()
    }, []);

    return (
        <Background>
            <U.UserAreaContainer>
                {loading ? (
                    <U.LoadingAnimationArea>
                        <U.LoadingAnimation size="large" color="white" />
                    </U.LoadingAnimationArea>)
                    : (
                        <>
                            <U.WelcomeArea>
                                <U.WelcomeName>Hello {user.user_name}!</U.WelcomeName>
                                <U.WelcomeId>ID: {user.user_id}</U.WelcomeId>
                            </U.WelcomeArea>
                            <U.InputsArea>
                                <U.Input editable={false} value={user.user_name} />
                                <U.Input editable={false} value={user.user_email} />
                                <U.Input editable={false} secureTextEntry value={user.user_password} />
                                <U.Input editable={false} secureTextEntry value={user.user_password} />
                                <U.SubmitButton>
                                    <U.SubmitButtonText>Submit</U.SubmitButtonText>
                                </U.SubmitButton>
                            </U.InputsArea>
                        </>
                    )
                }
            </U.UserAreaContainer>
            <U.Credits onPress={() => Linking.openURL("https://github.com/rafael-orige")}>
                <U.CreditText>Developed by Rafael Vargas</U.CreditText>
            </U.Credits>
        </Background>
    )
}