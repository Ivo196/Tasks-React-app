export default function appReducer (state,action) {

    switch (action.type) {
        case 'ADD_TASK':
        return {
            tasks: [...state.tasks,action.payLoad]
        }
        
        case 'DELETE_TASK':
        return {
            tasks: state.tasks.filter((task)=> task.id !== action.payLoad)
        }
        case 'UPDATE_TASK':
            const updatedTask = action.payLoad
            const updatedTasks = state.tasks.map((task) => {
            if(task.id === updatedTask.id){
                task.title = updatedTask.title
                task.description = updatedTask.description
            }
            return task
        })
            return {
                 tasks: updatedTasks
            }
        case "TOGGLE_TASK_DONE":
        return {
            tasks: state.tasks.map((task) => 
            task.id === action.payLoad ? {...task,done : !task.done}:task)
        }
    
        default:
            return state;
    }

}