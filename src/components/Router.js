import { Routes, Route } from "react-router-dom";
import { Toodo } from '../pages/Toodo'
import { Lists } from '../pages/Lists'
import { WORDS } from "../consts/words";

const Router = () => {
    return (
        <Routes>
            <Route path={WORDS.PATH.TOODO} exact element={<Toodo />} />
            <Route path={WORDS.PATH.LISTS} exact element={<Lists />} />
        </Routes>
    )
}

export { Router }