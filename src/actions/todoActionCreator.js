export const loadTodo=(data)=>{
    return {type:"LOAD_TODO" ,payload:data}
}

export const addTodo=(itemStr)=>{
    return {type:"ADD_TODO",itemStr}
}

export const deleteTodo=(id)=>{
    return{type:"DELETE_TODO", id}
}
