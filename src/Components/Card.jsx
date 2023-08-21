import React from 'react'
import '../Styles/Card.css'

// here we have taked props as item and also funtion handleClick from parent component
const Card = ({item,handleClick}) => {
    const {title,author,price,img}=item;
  return (
    <>
        <div className="cardsmain">
            <div className="img-box">
                {/* <img src="img" alt="Image" /> */}
            </div>
            <div className="details">
                <p>{title}</p>
                <p>{author}</p>
                <p>price:{price}Rs</p>
                <button className='btn btn-primary' onClick={()=>handleClick(item)} >Add cart</button>

            </div>
        </div>
    </>
  )
}

export default Card