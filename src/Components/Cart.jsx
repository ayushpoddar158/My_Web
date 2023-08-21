import React, { useState } from 'react'
import '../Styles/cart.css'
import { useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';
const Cart = () => {
    const {cart,setCart,subTotal,setSubTotal}= useAppContext();

    
    // here the function can delete data acction to different id and the item we have clicked
    const handleDelete=(uniid)=>{
        let price=0;
       setCart(
        cart.filter((ele,unique)=>{
            if(ele.unique!=uniid){
                return ele;
            }else{
                price=ele.price
            }
        })
       )
       setSubTotal(subTotal-price)
    }
  return (
    <>
    <div className="maindivcart">
<h3>Your Cart</h3>
    <div className="maincartinnerdiv ">

   
    {
        
        cart.map((item)=>(
            
            <div className="eachitem ">
                <div className='div1'><span>{item.title}</span></div>
                <div className='div2'>

                <span>Rs.{item.price}</span>
                </div>
                <div className='div3'>

                <button className='btn btn-danger' onClick={()=>handleDelete(item.unique)}>remove</button>
                </div>
            </div>
            
        ))
    }
    <div className="cardamount">
        <h4>Total Item:<span>{cart.length}</span></h4>
        <h4>SubTotal:<span>{subTotal}</span></h4>
    </div>
    </div>
    
    </div>
    </>
  )
}

export default Cart