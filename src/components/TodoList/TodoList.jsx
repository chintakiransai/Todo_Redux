import { useContext } from "react"
import Todo from "../Todo/Todo"
import TodoContext from "../../context/TodoContext"

function TodoList() {

const {todo,dispatch} =useContext(TodoContext)
    
function remove(ind)
{
    dispatch({type:"remove_todo",payload:{ind}})
}

function edit(ind,update)
{
    dispatch({type:"edit_todo",payload:{ind,update}})
}

function check(ind)
{
    dispatch({type:"check_todo",payload:{ind}})
}


    return (
        <>
        
        {todo.map((items,ind) => <Todo   todo={items} key={ind} remove={()=>{remove(ind)}} edit={(update)=>{edit(ind,update)}} check={()=>{check(ind)}}/>)}
        </>
        )
}


export default TodoList