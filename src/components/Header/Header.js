import Banner from './Banner'
import Nav from './Nav'

function Header() {
    return (
        <div className='absolute w-full'>
            <Banner />
            <Nav />
        </div>
    )
}

export default Header