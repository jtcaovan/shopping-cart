import React from 'react'
import { useParams } from 'react-router-dom'
import itemData from './ItemData'

function ItemDetail() {

    let { name } = useParams();
    let plant = itemData.find(item => name === item.name)

    return(
        <div className='h-screen bg-gray-300 bg-opacity-50'>
            <div className='h-1/2 flex'>
                <img className='' src={plant.img} alt=''/>
                <div>
                    <h1>Name: {plant.name}</h1>
                    <p>{plant.light}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail