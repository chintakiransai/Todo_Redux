import { useContext, useState } from "react"
import TodoContext from "../../context/TodoContext";


function AddTodo() {
    const {dispatch} =useContext(TodoContext)
    const [text,setText] = useState('')

    function add(text) {
        dispatch({type:"add_todo",payload:{text}})
    }

    return (
        <>
            <input type="text" placeholder="Add Todo Here" value={text} onChange={(e)=>setText(e.target.value)} />
            <input onClick={()=>{add(text); setText('');}} type="submit" value="Submit" />
        </>
    )
}


export default AddTodo