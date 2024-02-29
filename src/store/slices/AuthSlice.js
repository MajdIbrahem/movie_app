import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    isAuth:false
}
const Authslice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        Authentication: (state) => {
            state.isAuth=true
        },
        NotAuthentication: (state) => {
            state.isAuth=false
        }
    }
})

export const {NotAuthentication,Authentication}=Authslice.actions
export default Authslice.reducer