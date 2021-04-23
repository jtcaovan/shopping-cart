import React from 'react'
import Nav from 'components/Nav/ItemHeader'
import { useParams } from 'react-router-dom'
import itemData from './ItemData'
import Footer from 'components/Footer/Footer'

function ItemDetail() {

    let { name } = useParams();
    let plant = itemData.find(item => name === item.name)

    return(
        <div>
            <Nav />
            <div className='h-screen'>
                <div className='h-1/2 flex justify-between mx-20'>
                    <img className='' src={plant.img} alt=''/>
                    <div>
                        <h1>Name: {plant.name}</h1>
                        <p>{plant.light}</p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ItemDetail