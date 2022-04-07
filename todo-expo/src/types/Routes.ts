import type { StackScreenProps } from "@react-navigation/stack";

export type RoutesStackParamList = {
    Login: undefined,
    Todos: undefined,
    UserArea: undefined
}

export type NavigationType = StackScreenProps<RoutesStackParamList>;