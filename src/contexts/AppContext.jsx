
import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [input,setInput]=useState("");
    const [todos,setTodos]=useState([]);
    
    const [todoTotal,setTodoTotal]=useState(0);
    const [todoCompleted,setTodoCompleted]=useState(0);


    const [show,setShow]=useState(true);
const [cart,setCart]=useState([]); 
const[subTotal,setSubTotal]=useState(0);





useEffect(() => {
    let num=0
  todos.map((todos)=>{
  if(todos.completed===true){
    num=num+1;
  }
  })
  setTodoCompleted(num)
  }, [todos])







  return (
    <AppContext.Provider
      value={{
        input,
        setInput,
        todos,setTodos,
        todoTotal,setTodoTotal,
        todoCompleted,setTodoCompleted,
        show,setShow,
        cart,setCart,
        subTotal,setSubTotal



      }}
    >
      {children}
    </AppContext.Provider>
  );
};
