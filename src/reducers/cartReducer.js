import redux, {createStore} from "redux"
import products from '../components/Shop/ItemData'

// const [open, setOpen] = useState('')

// function displayCart() {
//     return {
//         type: "DISPLAY_CART"
//     }
// }

// function hideCart() {
//     return {
//         type: "HIDE_CART"
//     }
// }

function addToCart() {
    return{
        type: "ADD_TO_CART"
    }
}

const initialState = {
    products: products,
    addedIds: [],
    quantityById: {}
}

// const addedIds = (state = initialState.addedIds, action) => {
//     switch(action.type) {
//         case 'ADD_TO_CART':
//             return [ ...state, action.productId ]
//         default:
//             return state
//     }
// }

// const quantityById = (state = initialState.quantityById, action) => {
//     switch(action.type) {
//         case 'ADD_TO_CART':
//             // const { ProductId}
//             return [ ...state, action.productId ]
//         default:
//             return state
//     }
// }

const cartReducer = (state= initialState, action) => {
    return state
}

const store = createStore(cartReducer)
store.subscribe(() => console.log(store.getState()))

export default store