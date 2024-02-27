import React from 'react'
import './pl.css'
import Nav from './Nav'
import Sidebar from './Sidebar'
import Placem from './Placem'
import Drive from './Drive'
import Cards from './Cards'
import Footer from './Footer'

export default function Pl() {
  return (
    <div className='container'>
        <nav>
            <Nav></Nav>
        </nav> 

        <div className="m">

            <aside className='aside-atyle'>
                <Sidebar></Sidebar>
            </aside>

            <section className='sec-style'>
                <div className="f">
                    <Cards></Cards>
                    {/* <Placem></Placem> */}
                </div> <br />
                <div className="m2">
                    <Drive></Drive>
                    {/* <Drive></Drive> */}

                </div><br />
                <div className="l">
                    <Placem></Placem>
                </div>
            </section>
        </div> 
        <footer>
            <Footer></Footer>
        </footer>



    </div>
  )
}
