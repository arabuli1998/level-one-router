import React from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-circle-regular.svg'
import header from './styles/header.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
   
      <header>
                    <div className="logo">
                        <h1><Link to="/products">mdf</Link></h1>
                    </div>
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/products" >products</Link></li>
                        <li><Link to="/" >contact</Link></li>
                        <li><Link to="/" >about as</Link></li>
                        <li>
                            <img src={Close} alt="" width="30px"/>
                        </li>
                   </ul>
              <div className="menu">
                     <img src={Menu} alt="" width="30px" />
              </div>
       </header>
            
  )
}
export default Header;