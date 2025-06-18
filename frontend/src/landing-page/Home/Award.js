import React from 'react';

function Awards() {
    return (
        <div className="container mt-5 px-5">
            <div className="row ">
                <div className='col-6'>
                    <img src="Media/Assets/largestBroker.svg" alt="Awards" className='img-fluid' />
                </div>
                <div className='col-6 mt-3'>
                    <h2>Largest stock broker in India</h2>
                    <p>2+ STOCKNEST clients contributr to over 15% of all the volume, in india daily by trading and investing it</p>

                    <div className='row p-3'>
                        <div className='col-6'>
                            <ul>
                               <li className='fs-5'>Futures and optuion</li>
                               <li className='fs-5'>Commodity derivatives</li>
                               <li className='fs-5'>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li className='fs-5'>Stocks & IPOs</li>
                                <li className='fs-5'>Direct nutual funds</li>
                                <li className='fs-5'>Bonds and Govt Securities</li>
                            </ul>
                        </div>

                        <img src="Media/Assets/pressLogos.png" alt="Awards" className='img-fluid' style={{width:"80%"}} />
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Awards;