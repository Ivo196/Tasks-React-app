import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom';

 export const TaskList = () => {

  const {tasks, deleteTask, toggleTaskDone} = useContext(GlobalContext);
  

  return (
    <div className='flex justify-center'>

    {/* <button onClick={() => deleteTask()}>Delete All</button> */}

      <div className='w-6/12'>
        {tasks.map((task) => (
          <div className='bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between rounded' key={task.id}>
            <div>
              <h1>{task.title}</h1>
              <p>{task.description}</p> 
              {/* <h6>{task.id}</h6>  */}

              <button className='bg-green-600 hover:bg-green-500 py-1 px-2 mt-2 rounded' onClick={() =>toggleTaskDone(task.id) }>{
                task.done ? "DONE" : "UNDONE"
              }</button>

            </div>
            <div>

              <Link  to={`/edit/${task.id}`} className='bg-gray-600 hover:bg-gray-500  px-4 py-2 mr-2 rounded'>Edit</Link>
              <button className='bg-red-600 hover:bg-red-500 px-4 py-2 mr-2 rounded' onClick={() => deleteTask(task.id)}>Delete</button>

            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

