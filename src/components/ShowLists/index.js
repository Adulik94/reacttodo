import { useContext, useMemo } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { WORDS } from "../../consts/words"
import { ListsContext } from "../../context"
import { deleteListItem } from "../../context/ListsContext/actione"
import classes from './style.module.css'
import { IoIosArrowBack } from "react-icons/io"
const ShowLists = () => {
    const { data } = useParams()
    const { lists, dispatch } = useContext(ListsContext)

    const deleteList = (index) => {
        dispatch(deleteListItem(data, index))
    }

    const wrapperLists = useMemo(() => {
        return lists[data].map((value, index) => {
            return (
                <div key={index} className={classes.row} >
                    <div className={classes.wrapperValue}>
                        <input type='checkbox' />
                        <span className={classes.value}>{value}</span>
                    </div>
                    <div className={classes.wrapperEdit}>
                        <span className={classes.edit}>{WORDS.EDIT}</span>
                        <span className={classes.delete} onClick={() => deleteList(index)}>{WORDS.DELETE}</span>
                    </div>
                </div>
            )
        })
    }, [lists]);

    return (
        <div className={classes.wrapperLists}>
            <Link to={WORDS.PATH.TOODO} className={classes.goBack}><IoIosArrowBack />{WORDS.GO_BACK}</Link>
            <span className={classes.data}>{data}({lists[data].length})</span>
            <div className={classes.content}>
                {wrapperLists}
            </div>
            <div className={classes.under}>
                <span className={classes.state}>{WORDS.STATE}</span>
                <div>
                    <span className={classes.save}>{WORDS.CANCEL}</span>
                    <span className={classes.cancel}>{WORDS.SAVE}</span>
                </div>
            </div>
        </div>
    )
}

export default ShowLists