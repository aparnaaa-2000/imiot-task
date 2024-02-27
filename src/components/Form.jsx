import React from 'react'
import './form.css'

export default function Form() {
  return (
    <div className='container'>
      <h4 className='tr-cl'>Find a Students</h4>
        <div class="card form" style={{height:'auto',width:'auto'}}>
  <div class="card-body">
    <pre>
    <div className="cgpa">
    <a class="btn btn-primary disabled" id='std' aria-disabled="true" role="button" data-bs-toggle="button" style={{color:'black',width:'20%'}}>CGPA</a>    <span> <input type="text" className='cgpa-text' placeholder='Enter Your Required CGPA (Minimum)'/></span>

    </div></pre>
    <pre>
    <div className="cgpa">
    <a class="btn btn-primary disabled" id='std' aria-disabled="true" role="button" data-bs-toggle="button" style={{color:'black',width:'20%'}}>Backlogs</a>    <span> <input type="text" className='cgpa-text' placeholder='Enter Your Required CGPA (Minimum)'/></span>

    </div></pre>
    <pre>
    <div className="cgpa">
    <a class="btn btn-primary disabled" id='std' aria-disabled="true" role="button" data-bs-toggle="button" style={{color:'black',width:'20%'}}>Department</a>    <span> <input type="text" className='cgpa-text' placeholder='Select a department'/></span>

    </div></pre> <br />
    <button type="button" class="btn btn-primary btn-lg">Find Now</button>
  </div>
</div>
    </div>
  )
}
