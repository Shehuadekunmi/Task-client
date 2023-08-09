import React from 'react'
import Tag from '../components/Tags'
import { Link } from 'react-router-dom'
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";
import '../style/task.css'

const Tasks = ({ title, description, tag, _id}) => {

    const handleDelete = async (id)=>{

        try {
          const url = `https://task-server-kunmi.onrender.com/api/tasks/${_id}`
          const res = await fetch(url, {
            method: 'DELETE',
          });
          const data = await res.json();
          if (data.success){
            window.location.reload();
          } 
        } catch (error) {
          console.log(error);
        }
    }

  return (
    <div>

<div className=" task pb-4 px- mt-4 ">
     
      <div className=" d-flex align-items-end justify-content-between mx-1 mx-md-3 mb-2">
      <h1 className={tag === 'urgent'? 'red': 'green'}> {tag} </h1>
        <div className="mt-2 mt-lg-0 d-flex gap-2 gap-lg-3">
          <button className="blue-bg  updatebtn">
            <Link to={`/Edittask/${_id}`} className="text-decoration-none text-white "  >
               <MdOutlineModeEditOutline /> Edit
             </Link>
          </button>
          <button className=" border-none bg-transparent transparent delbtn"  onClick={()=>handleDelete(_id)}>
            <RiDeleteBinLine /> Delete
          </button>
        </div>
      </div>
      <hr />
       <h2 className="fw-bold text-capitalize mx-1 mx-md-3">{title}</h2>
      <p className='mx-1 mx-md-3 fs-5'>{description} </p>
    </div>

    </div>
  )
}

export default Tasks