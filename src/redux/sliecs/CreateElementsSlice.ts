import {createSlice} from "@reduxjs/toolkit";

interface objectForCreate {
    name: string,
    src: string,
    id: number,
    type: string,
    userValue: string
}

interface elementsIP {
    currentId: number,
    showEdit: boolean,
    arrayForRender: objectForCreate[]
}

const initialState: elementsIP = {
    currentId: -1,
    showEdit: false,
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
        },
        copyElement: (state, action) => {
            state.arrayForRender.push(action.payload)
        },
        upElement: (state, action) => {
            const {i, element} = action.payload
            if (0 === i) {
                console.log('start list')
            } else {
                state.arrayForRender.splice(i - 1, 0, element)
                state.arrayForRender.splice(i + 1, 1)
            }
        },
        downElement: (state, action) => {
            const {i, element} = action.payload
            if (state.arrayForRender.length - 1 === i) {
                console.log('end list')
            } else {
                state.arrayForRender.splice(i, 1)
                state.arrayForRender.splice(i + 1, 0, element)
            }
        },
        switchActive: (state, action) => {
            state.currentId = action.payload
            state.showEdit = !state.showEdit
        }
    }
})

export const {
    createNewElement,
    removeElement,
    changeValueElement,
    copyElement,
    downElement,
    upElement,
    switchActive
} = createElementsSlice.actions
export default createElementsSlice.reducer