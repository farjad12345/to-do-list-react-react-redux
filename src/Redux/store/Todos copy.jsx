//Actions
export const addTodo = "ADD_TODO"
export const removeTodo = "REMOVE_TODO"
export const Dotodo = "DO_TODO"
export const getAllTodo = "GET_ALL_TODO"
//Reduser
export default function reducer(state = [], action) {
    // console.log({action});
    switch (action.type) {
        case addTodo: {
            let newState = [...state]
            return [...newState, action.payload]
        }

        case Dotodo: {
            let newstate = [...state]
            newstate.some((todo) => {
                if (todo.id === action.payload.id) {
                    todo.isDone = !todo.isDone
                }
            })
return newstate
        }
        case removeTodo: {
            return state.filter((todo) => todo.id !== action.payload.id)

        }
        case getAllTodo: {
            return state
        }

        default:
            return state;
    }

}
//Action Creators 
export const addTodoACtion = (title) => {
    return {
        type: addTodo,
        payload: {
            id: crypto.randomUUID(),
            title,
            isDone: false
        }
    }
}

export const removeTodoAction = (id) => {
    return {
        type: removeTodo,
        payload: { id }
    }
}
export const doTodoAction = (id) => {
    return {
        type: Dotodo,
        payload: { id }
    }
}
export const getAllTodoAction = () => {
    return {
        type: getAllTodo,
    }
}




