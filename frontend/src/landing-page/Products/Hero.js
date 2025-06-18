import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className='container p-5 text-center'>
            <div className='row p-5'>
                <h1>Stock Nest Products</h1>
                <p className='fs-4 text-muted'>Sleek, modern, and intuitive trading platforms</p>
                <p className='text-muted'>Check out our <Link className='text-decoration-none' to='/'>investment offerings →</Link></p>
            </div>

        </div>
  )
}

export default Hero