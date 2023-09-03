function TodoReducer(state,action)
{
        if(action.type == "add_todo")
        {
            return [...state,{name:action.payload.text, checked:false}]
        }
        else if(action.type == "remove_todo")
        {
            const removed = state.filter((ele,index)=>index!=action.payload.ind)
            return removed
        }
        else if(action.type == "edit_todo")
        {
            state[action.payload.ind].name =action.payload.update
            return [...state]
        }
        else if(action.type == "check_todo")
        {
            state[action.payload.ind].checked = !state[action.payload.ind].checked
            return [...state]
        }
        else {
            return state
        }
}

export default TodoReducer