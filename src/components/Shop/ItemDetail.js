import React from 'react'
import { useParams } from 'react-router-dom'
import itemData from './ItemData'

function ItemDetail() {

    let { name } = useParams();
    let plant = itemData.find(item => name === item.name)

    console.log(plant)
    return(
        <div className='relative'>
            <h1>Name: {plant.name}</h1>
            <p>{plant.light}</p>
            <img src={plant.img} alt=''/>
        </div>
    )
}

export default ItemDetail