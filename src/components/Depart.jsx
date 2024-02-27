import React from 'react'
import './depart.css'

export default function Depart() {
  return (
    <div className='conatiner'>

{/* <div class="card" style={{height:'300px',width:'300px'}} >
  <img src="img/Rectangle 1442.png" class="card-img-top" id='dep' alt="..." />   <span>ECE</span>
  
</div> */}


<div class="card hash" style={{height:'350px',width:'300px'}} id='hash'>
  <div class="card-body">
    <img src="img/image1.png" alt="" id='dep' /> <span className='d'>ECE</span><br /><br />
    <div class="card">
  <div class="card-body">
    Electronics and Communication Engineering
  </div>
</div><br />
<div className="std-btn">
<a class="btn btn-primary disabled" id='std' aria-disabled="true" role="button" data-bs-toggle="button" style={{color:'black'}}>350  <br />Students</a>
</div>
  </div>
</div>

    </div>
  )
}
