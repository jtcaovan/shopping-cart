import React from 'react'
import Banner from './Banner'
import Nav from './Nav'

function Header() {
    return (
        <div className='absolute z-10 w-full'>
            <Banner />
            <Nav />
        </div>
    )
}

export default Header