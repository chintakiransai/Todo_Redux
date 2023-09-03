import { useState } from "react"


function Todo({todo,remove,edit,check}) {
    const [editable,setEditable] =useState(false)
    const [update,setUpdate] =useState(todo.name)
    return (
        <div>
        <input type="checkbox" checked={todo.check} onChange={check}/>
        
        {editable ? <input type="text" value={update} onChange={(e)=>{setUpdate(e.target.value)}} />:todo.name}
        <button onClick={()=>{setEditable(!editable);edit(update)}}>{editable ? 'save' : 'edit'}</button>
        <button onClick={remove}>delete</button>
        </div>
    )
}


export default Todo