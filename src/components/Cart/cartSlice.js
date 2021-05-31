import { createSlice } from '@reduxjs/toolkit'
import products from '../../products/products'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: products,
        currentCart: [],
        totalItems: 0,
        totalPrice: 0,
        display: 'hidden'
    },
    reducers: {
        addToCart: (state, action) => {
            state.currentCart.push(action.payload)
            state.totalItems += 1
        },
        removeFromCart: (state, action) => {
            state.currentCart = state.currentCart.filter(item => item.product.id !== action.payload.product.id)
            // state.currentCart.push(action.payload)
            state.totalItems -= 1
        },
        addQuantity: (state, action) => {
            // Find id in currentCart, grab all products that is not payload, add quantity + 1, set new state
            let item = state.currentCart.find(item => item.product.id === action.payload.product.id)
            let newCart = state.currentCart.filter(item => item.product.id !== action.payload.product.id)
            
            item.quantity = item.quantity + 1

            newCart.push(item)

            state.currentCart = newCart
        },
        addToTotal: (state, action) => {
            state.totalPrice += action.payload
        },
        displayCart: (state) => {
            state.display = null
        },
        hideCart: (state) => {
            state.display = 'hidden'
        },
    }
})

export const { addToCart, displayCart, hideCart, addQuantity, addToTotal} = cartSlice.actions

export default cartSlice.reducer