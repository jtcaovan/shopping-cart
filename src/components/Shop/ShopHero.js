import React from 'react'
import fiddle from 'assets/fiddle.jpg'

function ShopHero() {
    return(
        <div className='bg-cover bg-fixed bg-no-repeat h-3/4' 
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${fiddle})` }}>
            <h1 className='absolute top-1/2 left-1/2 font-display text-white text-5xl m-auto'>A Plant for Every Space</h1>
        </div>
    )
}
export default ShopHero