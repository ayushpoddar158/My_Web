import React from 'react'
import '../Styles/Todo.css'
import { useAppContext } from '../contexts/AppContext';
const TodoItemsList = () => {
    const {todos,setTodos}= useAppContext();
//it will mark item as true or false accoring to mark or unmark item 
const handlemark=(id)=>{
setTodos(
    todos.map((item)=>{
        if(item.id===id){
            return {...item,completed:!item.completed}
        }
        return item;
    })
)
}

// it will delete the selected item form the list
    const handleDelete=(id)=>{
        setTodos(todos.filter((todo)=>{
if(todo.id!=id){
    return todo
}
        }))
    }
 
  return (
   <div>
   {/* here we are using map to iterate through list and displaying item */}
{

    
 todos.map((todo)=>(
<div className='form-group eachitemdiv'>
<input type="text" className='' value={todo.title} disabled />

 <button className='btn btn-success buttontodoitem'onClick={()=>handlemark(todo.id)}>
   {
    todo.completed?"unmark":"mark"
   }
 </button>
<button className='btn btn-danger buttontodoitem' onClick={()=>handleDelete(todo.id)}>delete</button>
</div>
 ))}
   </div>)
};

export default TodoItemsList