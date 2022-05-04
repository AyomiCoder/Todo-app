import React, { useState } from 'react'
import './style.css'

const TodoItem = (props) => {

  const [isDone, setIsDone] = useState(false);
  function crossCheck(){
    setIsDone((prevItem) =>{
      return !prevItem;
    });
  }

  return (
    <div onClick={crossCheck}>
        <li style={isDone ? { textDecoration: "line-through" } : null}>{props.text}</li>
    </div>
  )
}

export default TodoItem