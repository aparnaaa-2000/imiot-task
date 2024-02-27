import React from 'react'
import './training.css'

export default function Training() {
  return (
    <div className='container'>
        <div className="line">
            <h4 className='tr-cl'>Training</h4> <button type="button" class="btn btn-primary"> + New Training</button>
        </div><br />
    <div class="card tr" style={{height:'auto',width:'auto'}}>
  <div class="card-body">
  <div class="card ind">
  <div class="card-body" style={{height:'auto',width:'auto'}}>
    <div className="py">
        <img src="img/image1.png" alt="" className='py-img'/> <p className='py-co'>Python Competetive <br /> <button  class="btn btn-outline-danger btn-sm " >03 - 06- Feb 24</button> <button  class="btn btn-outline-success btn-sm">Jaison</button></p>
    </div><br />
    <div className="dep-bt">
    <button  class="btn btn-outline-secondary btn-sm btt">ECE</button> 
    <button  class="btn btn-outline-secondary btn-sm btt">EEE</button>
    <button  class="btn btn-outline-secondary btn-sm btt">ME</button>
    </div>
  </div>
</div> <br />
<div class="card ind" >
  <div class="card-body"style={{height:'auto',width:'auto'}} >
    <div className="py">
        <img src="img/image1.png" alt="" className='py-img'/> <p className='py-co'>C Competetive <br /> <button  class="btn btn-outline-danger btn-sm">05 - 06- Feb 24</button> <button  class="btn btn-outline-success btn-sm">Dominic</button></p>
    </div><br />
    <div className="dep-bt">
    <button  class="btn btn-outline-secondary btn-sm btt">CSE</button> 
    <button  class="btn btn-outline-secondary btn-sm btt">IT</button>
    {/* <button  class="btn btn-outline-secondary btn-sm">2.3-5.7LPA</button> */}
    </div>
  </div>
</div>

  </div>
</div>
    
    </div>
  )
}
