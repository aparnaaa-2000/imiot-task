import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import Depart from './Depart'
import './candidates.css'
import Form from './Form'
import Training from './Training'
import Placem from './Placem'
import Footer from './Footer'

export default function Candidates() {
  return (
    <div className='container'>
        <Nav></Nav>

        
        <div className="divii">
            

            <aside className="main1">

        <Sidebar></Sidebar>
        </aside>

        <section className="main2">

        <article id='frst'>
            {/* <div className="frst"></div> */}
        <h4 className='tr-cl'>Departments</h4><br /><br />

        <Depart></Depart> 
        {/* <Depart></Depart>
        <Depart></Depart> */}

        </article> <br />

        <article className="mid">
            <Form></Form>
            <Training></Training>
        </article>
        <article>
        <h4 className='tr-cl'>Departments</h4> <br />
            <Placem></Placem>
            {/* <Placem></Placem> */}
        </article> <br />
       

            


        </section>
       
        
        </div>
        <footer>
            <Footer></Footer>
        </footer>
        
    </div>
  )
}
