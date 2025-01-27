import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers.
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }

})


// Action creators are generated for each case reducer function


export const { increment, incrementByAmount, decrement } = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer