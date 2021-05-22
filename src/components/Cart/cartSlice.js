import { createSlice } from '@reduxjs/toolkit'
import products from '../Shop/ItemData'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: products,
        addedIds: [],
        quantityById: {}
    },
    reducers: {
        addToCart: (state, action) => {
            state.addedIds.push(action.payload)
        }
    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer