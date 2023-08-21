import React, { useState } from 'react'
import list from'../assets/shopifyData'
import { Navigate, useNavigate } from 'react-router-dom'
import '../Styles/Shopify.css'
import {v4 as uuidv4} from 'uuid';
import Card from './Card'
import Cart from './Cart'
import { useAppContext } from '../contexts/AppContext';
const Shopify = () => {
    const {show,setShow,cart,setCart, subTotal,setSubTotal}= useAppContext();
    const navigate=useNavigate();
  
 const handleClick=(item)=>{
let isPresent=false;
cart.map((eachitem)=>{
    if(eachitem.title===item.title){
        isPresent=true;
        alert("This item already exists in your cart")
    }
})
if(isPresent===false){
    setCart([...cart,{unique:uuidv4(),  id: item.id,
        title: item.title,
        author: item.author,
        price: item.price,
        img: item.img,
        amount: item.amount,}])
    
       alert("added succesfully")
       setSubTotal(subTotal+item.price)
     } 
}

  return (
   <div className="shopifymain row">
   <h3>Shopify</h3>
<div className="innershopifyside1 col-6">
{
    list.map((item)=>(
        <Card item={item} handleClick={handleClick}/>
    ))
}
</div>
<div className="innershopifyside2 col-2">
    <button className='btn btn-success' onClick={()=>navigate("/cart")}>View Your cart</button>
</div>
   </div>
   
  )
}

export default Shopify