import React from "react"

import * as F from "./style";

type Props = {
    filter: string,
    setFilter: React.Dispatch<React.SetStateAction<string>>
}

export default function Filter({ filter, setFilter }: Props) {

    function changeFilter(filterType: string) {
        setFilter(filterType)
    }

    return (
        <F.TodoFilterArea>
            <F.TodoFilterItem onPress={() => changeFilter("all")}><F.TodoFilterItemText filter={filter === "all" ? "true" : "false"} >All</F.TodoFilterItemText></F.TodoFilterItem>
            <F.TodoFilterItem onPress={() => changeFilter("active")}><F.TodoFilterItemText filter={filter === "active" ? "true" : "false"}>Active</F.TodoFilterItemText></F.TodoFilterItem>
            <F.TodoFilterItem onPress={() => changeFilter("completed")}><F.TodoFilterItemText filter={filter === "completed" ? "true" : "false"}>Completed</F.TodoFilterItemText></F.TodoFilterItem>
        </F.TodoFilterArea>
    )
}