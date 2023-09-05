import {createSlice} from "@reduxjs/toolkit";

interface objectForCreate {
    name: string,
    src: string,
    id: number,
    type: string,
    userValue: string
}

interface elementsIP {
    arrayForRender: objectForCreate[]
}

const initialState: elementsIP = {
    arrayForRender: []
}

const createElementsSlice = createSlice({
    name: 'createElement',
    initialState,
    reducers: {
        createNewElement: (state, action) => {
            state.arrayForRender = [...state.arrayForRender, action.payload]
            console.log(state.arrayForRender)
        },
        removeElement: (state, action) => {
            state.arrayForRender = state.arrayForRender.filter((item, index) => index !== action.payload)
        },
        changeValueElement: (state, action) => {
            const {target, i} = action.payload
            state.arrayForRender[i].userValue = target
            console.log(state.arrayForRender[i].userValue)
        }
    }
})

export const {createNewElement, removeElement, changeValueElement} = createElementsSlice.actions
export default createElementsSlice.reducer