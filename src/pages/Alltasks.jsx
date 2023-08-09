import React, { useEffect, useState } from 'react'
import TaskHeader from '../components/TaskHeader'
import tasks from '../data/task'
import Tasks from '../components/Tasks'
import Loading from '../components/Loading'
import Header from '../components/Header3'
import { useFetch } from '../Hooks/useFetch'

const Alltasks = () => {

// const [task, setTask] = useState([]);
// const [loading, setLoading] = useState(true);

// const getTasks = async () =>{
//   try {
//     const res = await fetch('http://localhost:5000/api/tasks');
//     const data = await res.json();
//     setLoading(false);
//     setTask(data.tasks)
//   } catch (error) {
//     console.log(error);
//   }
// };

// useEffect(() => {
//   getTasks();
// }, [])
const {
  isLoading, data: {tasks},
} = useFetch("https://task-server-kunmi.onrender.com/api/tasks")


  return (
    <div>
      <Header />
      <TaskHeader heading="My Tasks"/>
      {isLoading && <Loading/>}
      <div>
        <div>
          { tasks &&
          tasks.map((g) => {
            return <Tasks key={g._id} {...g} />;
          })}
        </div>
      </div>
    </div>
  )
}

export default Alltasks