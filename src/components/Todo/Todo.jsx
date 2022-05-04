import React, { useState } from 'react'
import './style.css';
import 'animate.css';
import TodoItem from '../TodoItem/TodoItem';

const Todo = () => {
const [inputText, setInputText] = useState("");
const [item, setItem] = useState([]);

function inputChange (event){
const inputValue = event.target.value
setInputText(inputValue)
}

function addItem(){
    setItem((prevItem) => {
        return [...prevItem, inputText];
    });
    setInputText("")
}

    const d = new Date().getFullYear()

  return (
      <>
    <div className='container'>
    <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className='form'>
          <input onChange={inputChange} type="text" value={inputText}/>
          <button onClick={addItem}>
              <span>Add</span>
          </button>
      </div>
      <div>
          <ul>
             {item.map((todoItem) => (
                 <TodoItem text= {todoItem}/>
             ))}
            
          </ul>
      </div>
     
    </div>
    <h6>Ayomide Aluko (c){d}</h6>
    </>
  )
}

export default Todo