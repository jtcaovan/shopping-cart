import { createSlice } from '@reduxjs/toolkit'
import products from '../../products/products'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: products,
        addedIds: [],
        quantityById: {},
        display: 'hidden'
    },
    reducers: {
        addToCart: (state, action) => {
            state.addedIds.push(action.payload)
        },
        displayCart: (state) => {
            state.display = null
        },
        hideCart: (state) => {
            state.display = 'hidden'
        }
    }
})

export const { addToCart, displayCart, hideCart} = cartSlice.actions

export default cartSlice.reducer