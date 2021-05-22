import { configureStore } from '@reduxjs/toolkit'
import cartReducer from 'components/Cart/cartSlice'

export default configureStore({
    reducer: {
        cart: cartReducer,
    },
})