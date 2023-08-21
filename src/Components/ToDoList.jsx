import React, { useState } from 'react'
import '../Styles/Todo.css'
import { useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import TodoItemsList from './TodoItemsList';
import { useAppContext } from '../contexts/AppContext';
const ToDoList = () => {
  const {input,setInput,todos,setTodos,todoCompleted}= useAppContext();

let l=0;

// onchange it will change value of Input useState
const onInputChange=(e)=>{
setInput(e.target.value);
}    



// when button is clicked it will set items in Todos useState
const onFormSubmit=(e)=>{
e.preventDefault();
let isfound=false;
todos.map((item)=>{
  if(item.title===input){
    isfound=true;
    alert("This item already exist in list")
  }


})
if(isfound===false){
  setTodos(
    [...todos,{id:uuidv4(),title:input,completed:false}]
  );
  alert("item added successfully")
}



// after assigning value to todos it will set "" in input so that it can take value again
setInput("");


}
  return (
<>
 <div className="todomain">
 <h2>ToDo List</h2>
<div className="todoinnnermain">
<form onSubmit={onFormSubmit}className='form-group' >
        <input type="text" placeholder='Enter an item' value={input} required
        onChange={onInputChange} class="form-control" />
        <button type='submit' className='btn btn-primary todoaddbtn'>Add</button>
    </form>
    <div className="todoItems">
    <TodoItemsList />

   

    <div>
    <div className="todoTotal">
<h5>Total:{todos.length}</h5>
    </div>
 <div className="Completeddiv">
<h5>Completed:{todoCompleted}</h5>
 </div>
   

    </div>
</div>
</div>


 </div>
</>
  )
}

export default ToDoList