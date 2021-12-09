import { useContext, useMemo } from "react"
import { Link } from 'react-router-dom';
import { WORDS } from "../../consts/words";
import { ListsContext } from "../../context"
import classes from './style.module.css'

const Lists = () => {

    const { lists } = useContext(ListsContext);
    const Lists = useMemo(() => {

        const dates = Object.keys(lists)
        return dates.map((data, index) => {
            return (
                <Link
                    to={`list/${data}`}
                    key={index}
                    className={classes.list}
                >
                    {data}({lists[data].length})
                </Link>
            )
        })
    }, [lists])

    return (
        <div className={classes.lists}>
            <h2 className={classes.title}>{WORDS.DATES}</h2>
            <div className={classes.content}>
                {Lists}
            </div>
        </div>
    )
}

export { Lists }