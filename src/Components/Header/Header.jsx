import React from 'react'
import "./Header.css"
function Header() {
  const sentMail = () =>{
    open("mailto:connecttoamalmathew@gmail.com&subject='Enquiry'")
  }
  return (
    <nav className='topNav'>
        <div className="title">
        <h1> &#60;LineByLine&#62;</h1>
        </div>
        <div className="info">
          <button onClick={sentMail}>
            <span>SAY HELLO</span>
          </button>
        </div>
    </nav>
  )
}

export default Header

