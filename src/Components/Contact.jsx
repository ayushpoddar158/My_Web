import React from 'react'
import '../Styles/Contact.css'

const Contact = () => {

  return (
    <>
<div className="mainform">
  <div className="innnerform">
  <h3>Contact us</h3>
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Enter email"/>
   
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Feedback</label>
    <textarea required class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
</div>
    </>
  )
}

export default Contact