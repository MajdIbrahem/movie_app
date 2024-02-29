import { configureStore } from '@reduxjs/toolkit' 
import AuthReducer from './slices/AuthSlice'
import FavouriteReducer from './slices/FavouriteSlice'
const store = configureStore({
    reducer: {
        auth: AuthReducer,
        favourite:FavouriteReducer
    }
})

export default store