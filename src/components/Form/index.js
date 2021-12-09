import { useContext, useState } from "react"
import { ListsContext } from "../../context"
import { addList, createList } from "../../context/ListsContext/actione"
import { WORDS } from "../../consts/words";
import classes from './style.module.css'

const Form = () => {
    const [date, setDate] = useState('')
    const [value, setValue] = useState('')
    const { lists, dispatch } = useContext(ListsContext);

    const changeDate = (event) => {
        const { target: { value } } = event;
        setDate(value)
    }
    const changeValue = (event) => {
        const { target: { value } } = event;
        setValue(value)
    }
    const submit = (event) => {
        event.preventDefault();
        if (lists[date]) {
            dispatch(addList(date, value))
        } else {
            dispatch(createList(date, value))
        }
        setValue('')
    }

    return (
        <form onSubmit={submit} className={classes.form} >
            <h2 className={classes.title}>{WORDS.NEW_TASK}</h2>
            <div className={classes.content}>
                <input
                    type='text'
                    placeholder='What will do ?'
                    value={value}
                    onChange={changeValue}
                    className={classes.inputValue}
                />
                <input
                    type='date'
                    onChange={changeDate}
                    value={date}
                    className={classes.inputData}
                />
                <button type='submit' className={classes.add}>{WORDS.ADD}</button>
            </div>
        </form>
    )
}

export { Form }