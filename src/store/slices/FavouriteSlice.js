import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    list:[]
}
const FavouriteSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        add: (state, action) => {
            const listItem = state.list.find((item) => {
                return item.id=== action.payload.id
            })
            if (listItem) {
                return 
            } else {
            state.list.push(action.payload)
            }
        }
    }
})
export const {add} =FavouriteSlice.actions

export default FavouriteSlice.reducer