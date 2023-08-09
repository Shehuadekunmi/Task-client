import React from 'react'

const Tags = ({Urgent}) => {
  return (
    <div>


    <div className="parent-container">
      <div className="d-flex justify-content-between text-secondary">
        <p>Tag</p>
        <p>{Urgent} </p>
      </div>
      <div className="parent">
        <div
          className={Tags === '' ? "red" : "green"}
        //   style={{
        //     width: `${num}%`,
        //   }}
        ></div>
      </div>
    </div>

    </div>
  )
}

export default Tags