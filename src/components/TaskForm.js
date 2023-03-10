import React, {useState, useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalContext';
import {useNavigate, useParams} from 'react-router-dom'

const TaskForm = () => {

    const {addTask, tasks, updateTask} = useContext(GlobalContext)
    const history = useNavigate()
    const params = useParams()
    

    const [task, setTask] = useState({
      id:'',
      title:'',
      description:''
    });
    
    const handleChange = (e) => 
      setTask({...task,[e.target.name]:e.target.value})
    
    const handleSubmit = e => {
      e.preventDefault()
      if(task.id){
        updateTask(task)
      } else {
        addTask(task)
        
      }
      history('/')
    }

    useEffect(() =>{
      const taskFound = tasks.find(task => task.id === params.id)
      if (taskFound){
        console.log('editing')
        setTask(taskFound)
      } else {
        console.log("creando")
      }
    },[params.id,tasks])

  return (
    <div className='flex justify-center items-center h-3/4 '>
      <form className='bg-gray-900 p-10 rounded' onSubmit={handleSubmit}>
        <h2 className='mb-7 text-3x1'>{
          task.id ? "EDIT TASK" : 'CREATE TASK'
        }</h2>

        <div className='mb-5 '>
          <input 
            type="text"
            name='title'
            placeholder='Write a Title'
            onChange={handleChange}
            value={task.title}

            className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full rounded'
          />
        </div>
        <div className='mb-5'>
          <textarea 
            name='description'
            rows="2"
            placeholder='Write a Description'
            onChange={handleChange}
            value={task.description}
            className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full rounded'
          />
        </div>
        <button className='bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5 rounded'>
        {
          task.id ? "EDIT TASK" : 'CREATE TASK'
        }
        </button>
      </form>
    </div>
  )
}

export default TaskForm