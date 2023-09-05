import {createSlice} from "@reduxjs/toolkit";

interface objectForCreate {
    name: string,
    src: string,
    id: number
}

interface elementsIP {
    arrayForRender: objectForCreate[]
}

const initialState = {
    arrayForRender: []
}

const createElementsSlice = createSlice({
    name: 'createElement',
    initialState,
    reducers: {
        createNewElement: (state, action) => {
        }
    }
})

export const {} = createElementsSlice.actions
export default createElementsSlice.reducer