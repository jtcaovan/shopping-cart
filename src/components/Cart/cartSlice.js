import { createSlice } from '@reduxjs/toolkit'
import products from '../../products/products'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: products,
        addedIds: [],
        quantityById: [],
        display: 'hidden'
    },
    reducers: {
        addToCart: (state, action) => {
            // if action.paylod is in addedIds,
            // action.payload.quantity + 1
            // else action.payload quantity = 1

            state.addedIds.push(action.payload)
        },
        addQuantity: (state, action) => {
            let addedItem = state.products.find(product => product.id === action.payload.id)
            let existingItem = state.addedIds.find(product => action.payload.id === product.id)

            if (existingItem) {
                addedItem.quantity += 1;
            } else {
                addedItem.quantity = 0
            }
            
            state.quantityById.push(addedItem)
        },
        displayCart: (state) => {
            state.display = null
        },
        hideCart: (state) => {
            state.display = 'hidden'
        },
    }
})

export const { addToCart, displayCart, hideCart, addQuantity} = cartSlice.actions

export default cartSlice.reducer