import React from 'react'
import './home.css'
import Sidebar from './Sidebar'
// import '../img'
import Nav from './Nav'
import Cards from './Cards'
import Footer from './Footer'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faBellConcierge } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
    <div className="container ">
    <Nav></Nav> <br />
  
   <aside className='aside'>
    <Sidebar></Sidebar>
   </aside>

  
  

{/* 
<article>
    <div class="card" style={{height:'200px',width:'200px'}} >
  <img src="img/Rectangle 1442.png" class="card-img-top" alt="..."/>
  <div class="card-body">
  
  </div>
</div>
</article> */}


<article>
<div className="ca">
  <Cards></Cards>
  <Cards></Cards>
  <Cards></Cards>
</div>
</article><br /><br />
<footer>
  <Footer></Footer>
</footer>
</div>   
      
    
    </>
    
  )
}
