import React from 'react'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBellConcierge } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  return (
   
        <nav class="navbar bg-body-tertiary">
  <div class="container" >
    {/* <a class="navbar-brand" href="#"> */}
        
      {/* <img src="https://s3.ap-south-1.amazonaws.com/yepdesk-image/event/logo/DXZLR7J3_small.png" alt="Bootstrap" width="30" height="30"/> */}
      <div class="l">
  {/* <div class="card-body"> */}
    
  {/* <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="blue" class="bi bi-people" viewBox="0 0 16 16">
  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
</svg> */}
<div className="lo">
<img src="https://s3.ap-south-1.amazonaws.com/yepdesk-image/event/logo/DXZLR7J3_small.png" alt="" style={{height:'70px', width:'70px'}}/>
<div className="tot">
 <span className='share'>ShareInfo</span> <pre className='f'>   Find Your Solutions...!<br /><p style={{color:'blue'}}>           for CAMPUS</p></pre></div>
 </div>


    
  </div>
{/* </div> */}



<div className="cont">
    <span> <img src="img/Search Bar (1).png" alt="" style={{height:'60px',width:'60px'}}/>
  </span>  
{/* <FontAwesomeIcon icon={faBellConcierge} style={{height:'23px',width:'23px',paddingTop:'0px'}}/></span> */}
<img src="img/bell.png" alt="" style={{height:'80px',width:'80px'}}/>
    <span> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="grey" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
</svg></span>
<span class="account-image">
    <img src="img/Rectangle 1347.png" alt="" style={{height:'60px',width:'60px'}} />
  </span>
  </div>



    {/* </a> */}
  </div>
</nav>
    
  )
}
