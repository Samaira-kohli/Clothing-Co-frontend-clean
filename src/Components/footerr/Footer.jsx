import React from 'react'
import './footer.css'

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className="col-1">
                    <h1>Quick Links</h1>
                    <p>Home</p>
                    <p>Shop</p>
                    <p>Our Story</p>
                    <p>Contact</p>
                </div>
                <div className="col-2">
                    <h1>Policies</h1>
                    <p>Home</p>
                    <p>Shop</p>
                    <p>Our Story</p>
                    <p>Contact</p>
                </div>
                <div className="newsletter">
                    <h1>Subscribe to our emails</h1>
                    <input type='text' placeholder='Enter your email' />
                </div>
            </div>
            <div className='copyright'>
                <p>© Clothing Co. All Rights Reserved.</p>
                <hr />
            </div>
        </>
    )
}

export default Footer