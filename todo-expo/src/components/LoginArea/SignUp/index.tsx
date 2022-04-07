import React, { useState } from 'react';
import * as User from '../../../services/user';

import {
    Title,
    Submit,
    Input,
    SubmitText,
    ChangeFormArea,
    ChangeForm,
    LoadingAnimation
} from '../style';

type Props = {
    user: { name: string, email: string, password: string, repeatPassword: string },
    setUser: React.Dispatch<React.SetStateAction<{ name: string, email: string, password: string, repeatPassword: string }>>,
    setChangeForm: React.Dispatch<React.SetStateAction<boolean>>,
    warning: { status: boolean, warning: string },
    setWarning: React.Dispatch<React.SetStateAction<{ status: boolean, warning: string }>>
}

function SignUp({ user, setChangeForm, setUser, warning, setWarning }: Props) {
    const [loading, setLoading] = useState(false);

    async function RegisterAccount() {
        let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (regex.test(user.email)) {
            setLoading(true)
            if (user.password !== user.repeatPassword) {
                setWarning({ status: true, warning: "The passwords don't match" });
                return
            }
            if (user.email !== "" && user.password !== "" && user.name !== "" && user.repeatPassword !== "") {
                let newAccount = await User.registerUser(user.email, user.password, user.name);
                if (newAccount.status === "User already exists") {
                    setWarning({ status: true, warning: "Email already in use" });
                } else if (newAccount.status === "User created sucessfully") {
                    setWarning({ status: true, warning: `An email for validation was sent to ${user.email}.` })
                    setChangeForm(false);
                } else if (newAccount.status === "User not registered") {
                    setWarning({ status: true, warning: "Some error ocurred and your account was not created." });
                }
            }
            setLoading(false);
        } else {
            setWarning({ status: true, warning: "Email format incorrect" });
        }
    }

    return (
        <>
            <Title>Sign Up</Title>
            <Input
                placeholder="Name"
                value={user.name}
                onChangeText={(event) =>
                    setUser(user => ({ ...user, name: event }))
                }
            />
            <Input
                placeholder="Email"
                value={user.email}
                onChangeText={(event) =>
                    setUser(user => ({ ...user, email: event }))
                }
            />
            <Input
                placeholder="Password"
                value={user.password}
                secureTextEntry
                onChangeText={(event) =>
                    setUser(user => ({ ...user, password: event }))
                }
            />
            <Input
                placeholder="Repeat your password"
                value={user.repeatPassword}
                secureTextEntry
                onChangeText={(event) =>
                    setUser(user => ({ ...user, repeatPassword: event }))
                }
            />
            <Submit disabled={loading ? true : false} onPress={RegisterAccount}>
                <SubmitText>{loading ? <LoadingAnimation color="white" size="small" /> : "Sign Up"}</SubmitText>
            </Submit>
            <ChangeFormArea
                onPress={() => {
                    setChangeForm(false);
                }}>
                <ChangeForm>Already have an account?</ChangeForm>
            </ChangeFormArea>
        </>
    );
}

export default SignUp;
