import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodusFromServer = createAsyncThunk(
    'todos',
    async (url) => {
        return fetch(url).then((res) => res.json())
            .then((data) => data)
    },
)
const slice = createSlice(
    {
        name: "todos",
        initialState: [],
        reducers: {
            addTodoACtion: (todos, action) => {
                todos.push({ todo: action.payload.todo, id: crypto.randomUUID(), IsDone: false })
            },
            removeTodoAction: (todos, action) => {
                return todos.filter((todo) => todo.id != action.payload)
            },
            doTodoAction: (state, action) => {
                const newstate = state.map((todo) => {
                    if (todo.id === action.payload) {
                        return [todo.isDone = !todo.isDone]
                    }
                })
            }

        },
        extraReducers: builder => {
            builder.addCase(getTodusFromServer.fulfilled, (State, Action) => {
                console.log({State});
                console.log("Action...", Action.payload.todos);
                State.push(...Action.payload.todos)

            })
            // builder.addCase(getTodusFromServer.pending, (State, Action) => {
                // console.log({ State });
                // console.log("action", ...Action.payload.todos);
                // console.log("Action...", Action.payload.todos);
                // State.push(...Action.payload.todos)

            // })
            // builder.addCase(getTodusFromServer.rejected, (State, Action) => {
                // console.log({ State });
                // console.log("action", ...Action.payload.todos);
                // console.log("Action...", Action.payload);
                // State.push(...Action.payload.todos)

            // })
        }

    }
)
export const { addTodoACtion, removeTodoAction, doTodoAction } = slice.actions;
export default slice.reducer;

// //ActionsType
// export const addTodo = "ADD_TODO"
// export const removeTodo = "REMOVE_TODO"
// export const doTodo = "DO_TODO"
// export const getAllTodo = "GET_ALL_TODO"
// //Reduser
// export default function reducer(state = [], action) {
//     // console.log({action});
//     switch (action.type) {
//         case addTodo: {
//             let newState = [...state]
//             return [...newState, action.payload]
//         }

//         //         case doTodo: {
//         //             let newstate = [...state]
//         //             newstate.some((todo) => {
//         //                 if (todo.id === action.payload.id) {
//         //                     todo.isDone = !todo.isDone
//         //                 }
//         //             })
//         // return newstate
//         //         }
//         case doTodo: {
//             let newState = [...state];
//             let x = newState.map((todo) => {
//                 if (todo.id === action.id) {
//                     console.log(action.id);
//                     todo.isCompleted = !todo.isCompleted;
//                 }
//             });
//             return x;
//         }


//         case removeTodo: {
//             return state.filter((todo) => todo.id !== action.payload.id)

//         }


//         default:
//             return state;
//     }

// }
// //Action Creators 
// export const addTodoACtion = (title) => {
//     return {
//         type: addTodo,
//         payload: {
//             id: crypto.randomUUID(),
//             title,
//             isDone: false
//         }
//     }
// }

// export const removeTodoAction = (id) => {
//     return {
//         type: removeTodo,
//         payload: { id }
//     }
// }
// export const doTodoAction = (id) => {
//     return {
//         type: doTodo,
//         id,
//     }
// }
// export const getAllTodoAction = () => {
//     return {
//         type: getAllTodo,
//     }
// }




