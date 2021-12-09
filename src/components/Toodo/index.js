import { Form } from "..";
import { Lists } from "..";
import { WORDS } from "../../consts/words";

import classes from './style.module.css'

const Toodo = () => {
    return (
        <div className={classes.continer}>
            <h1 className={classes.title}>{WORDS.TO_DO_LIST}</h1>
            <Form />
            <Lists />
        </div>
    )
}

export default Toodo;