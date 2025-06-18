import React from 'react'

function Hero() {
    return ( 
        <div className='container p-5 text-center'>
            <div className='row '>
                <img src="Media/Assets/homeHero.png" alt="Hero" className='img-fluid mb-5' style={{ maxHeight: "350px", objectFit: "contain" }} />
                <h1>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                {/* <button className='btn btn-lg col-8 col-sm-6 col-md-4 col-lg-2 btn-primary text-center' style={{width:"20%" , margin:"auto"}}>Sign up for free</button> */}
                <button className="btn btn-lg col-8 col-sm-6 col-md-4 col-lg-2 btn-custom-primary text-center" style={{ margin:"auto"}}>Sign up for free</button>
            </div>

        </div>
     );
}

export default Hero;