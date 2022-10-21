import React from 'react'
import './Nav.css'
function Form() {
  return (
    <div >
        <div className="freelancing main">
            <div className="overley">
            <div className="container element">
                <h2>I am <span>Available</span>for freelancing</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi vero consequatur officiis, ducimus, cupiditate ipsam consectetur consequuntur perferendis dolore vitae explicabo ratione quae, sequi maxime!</p>
            </div>
            </div>
        </div> 
        <div className=" container main us "><h2>Contact us</h2></div>
        <div className="form container main">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" htmlFor="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" htmlFor="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" htmlFor="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="description">
                  <label className="form__label" htmlFor="description">Description </label>
                  {/* <input className="form__input" type="text" rows="4" text cols="50"  id="desc" placeholder="Description"  /> */}
                  <textarea id="desc" className='desc' name="description" rows="4" cols="50"></textarea>
              <button type="submit" className="btn">Register</button>
              </div>
              
          </div>
          <div className="footer">
          </div>
      </div>    
    </div>
  )
}

export default Form