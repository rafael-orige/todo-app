import axios from "axios";
import config from "../../../app.config"
import AsyncStorage from "@react-native-async-storage/async-storage";

const url = config.extra.BASE_URL;

export const registerUser = async (email: string, password: string, name: string): Promise<{ status: string }> => {
    var res = await axios({
        method: 'post',
        url: url + '/register',
        data: `email=${email}&password=${password}&name=${name}`
    }).then((res) => ({ status: res.data.status }));
    return res
};

export const loginUser = async (email: string, password: string): Promise<{ status: boolean, token?: string, id?: number, error?: string }> => {
    var login = {
        status: false,
        token: "",
        id: 0
    }

    try {
        await axios({
            method: 'post',
            url: url + '/login',
            headers: {
                email: email,
                password: password
            }
        }).then(res => {
            login = res.data
        });
    } catch (error: any) {
        console.error("Something bad ocurred", error.message);
    }
    return login
};

export const userData = async (): Promise<{ user_name: string, user_email: string, user_password: string, user_id: number }> => {
    const token = await AsyncStorage.getItem("token");
    const id = await AsyncStorage.getItem("user_id");
    const Bearer = `Bearer ${token}`;

    let user = await axios({
        method: 'get',
        url: url + `/${id}` + "/user",
        headers: {
            Authorization: Bearer
        }
    }).then(res => {
        if (res.data.status) {
            let user_data = {
                ...res.data.user,
                user_password: Array(res.data.user.user_password.length).join("*")
            }
            return user_data
        } else {
            return { error: "User not found" }
        }
    })

    return user
}