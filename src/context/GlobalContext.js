import {  createContext, useReducer } from "react";
import appReducer from "./AppReducer";
import { v4 } from "uuid";

const initialState = {
    tasks: [
        {
            id:'1',
            title: 'title one',
            description: 'some description',
            done: false
        },
        {
            id:'2',
            title: 'title two',
            description: 'some description',
            done: false
        }
    ]
}

export const GlobalContext = createContext(initialState)

export const ContextProvider =  ({children}) => {

    const [state, dispatch] = useReducer(appReducer, initialState)

    const addTask = (task) => 
        dispatch({type:"ADD_TASK",payLoad:{...task,id:v4()}})
    

    const deleteTask = (id) => 
        dispatch({type:"DELETE_TASK", payLoad: id})

    const updateTask = (task) => 
        dispatch({type:"UPDATE_TASK", payLoad:task})

    const toggleTaskDone = id => 
        dispatch({type: "TOGGLE_TASK_DONE", payLoad: id})
    
    return (<GlobalContext.Provider value={{...state, addTask, deleteTask, updateTask, toggleTaskDone}}>
        {children}
    </GlobalContext.Provider>   
    )
}