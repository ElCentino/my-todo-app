import { PropTypes } from 'react'
import Add from 'react-icons/lib/md/add'

export const TopBar = ({listCount, addNote}) => (

    <div className="top-bar">
        <span className="topBar-text">Number of todos : {listCount}</span>
        <span className="add-button"><Add onClick={() => {
            addNote()
        }}/></span>
    </div>
)

TopBar.propTypes = {
    listCount: props => {

        if(props.listCount > 100) {
            return new Error(`
                ${props.listCount} todos is insane
            `)
        } else if(Number.isNaN(props.listCount)) {
            return new Error(`
                listCount is required
            `)
        }
    }
}