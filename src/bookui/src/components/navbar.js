import React from 'react';
import './navbar.css';
import '../media/Einstein_laughing.jpeg'
import VariableWidthTooltip from './Tooltips'
import {Link} from 'react-router-dom'
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}

const Navbar = (props)=>{

    return (
            <div>
              <div id="mySidenav" className="sidenav">
                <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
                <Link to ='/'>Home</Link>
                <Link to ='/categories'>categories</Link>

                  {props.isAuthenticated ?
                  <Link to ='/'>logout</Link> :
                  <div>
                  <Link to ='/login'>Login</Link>
                  <Link to ='/register'>Register</Link>
                  </div>
                  }


              </div>

              <div id="main">
                <span style={{fontSize:"30px",cursor:"pointer"}} onClick={openNav}>&#9776;</span>
              </div>
            </div>
    );
  }


export default Navbar;
