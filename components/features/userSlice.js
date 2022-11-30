import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: '',
    filterName: '',
    data: [],
    formControl: 10,
    type: '',
    nextPage: '',
    prevPage: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setFilterName: (state, action) => {
            state.filterName = action.payload
        },
        setData: (state, action) => {
            state.data = action.payload
        },
        setFormControl: (state, action) => {
            state.formControl = action.payload
        },
        setType: (state, action) => {
            state.type = action.payload
        },
        setNextPage: (state, action) => {
            state.nextPage = action.payload
        },
        setPrevPage: (state, action) => {
            state.prevPage = action.payload
        }
    }
})

export const { setFirstName,  setFilterName, setData, setFormControl, setType, setNextPage, setPrevPage} = userSlice.actions
export default userSlice.reducer