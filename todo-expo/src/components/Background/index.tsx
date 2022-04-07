import React from "react";
import { Platform } from "react-native";

import Header from "../Header";

import * as B from "./style";

type Props = {
    children: React.ReactNode
}

export default function Background({ children }: Props) {

    const BackgroundImage = require(`../../assets/bg-mobile-${"dark"}.jpg`);

    return (
        <B.Container>
            <B.Background source={BackgroundImage} />
            <Header />
            {children}
        </B.Container>
    );
}