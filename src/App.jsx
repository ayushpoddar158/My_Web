import React from 'react'
import { useState } from 'react'

import { useEffect } from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import ToDoList from './Components/ToDoList'
import Shopify from './Components/Shopify'
import Weather from './Components/Weather'
import Cart from './Components/Cart'
import { AppProvider } from './contexts/AppContext';

// import React from "react";
import {
  BrowserRouter as Router,
    Routes,
  Route,
  Link
} from "react-router-dom";




const App = () => {



// here we used useEffect so that if any change occur in todos it will map and 
// count num of task completed
// useEffect(() => {
//   let num=0
// todos.map((todos)=>{
// if(todos.completed===true){
//   num=num+1;
// }
// })
// setTodoCompleted(num)
// }, [todos])

  return (
    <>
<Router> 
<Navbar/>
<AppProvider>
<Routes>
          <Route path="/about" element={ <About />}>
           
          </Route>
         
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
         
          <Route path="/todolist" element={<ToDoList  />}></Route>

         
          <Route path="/shopify" element={<Shopify /> }></Route>
          <Route path="/cart" element={<Cart/>}></Route>

          <Route path="/weather" element={<Weather />}></Route>
        </Routes>
        </AppProvider>
        </Router>   
    </>
  )
}

export default App