import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface UserState {
    id: number,
    name: string,
}

const initialState: UserState[] = [

    {
        id: 0,
        name: 'Jone doe'
    },
    {
        id: 1,
        name: 'William'
    },
    {
        id: 2,
        name: 'Victor Hugo'
    }
]

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }

})


// Action creators are generated for each case reducer function

//no action
//export const { createPost } = usersSlice.actions

export const selectAllUsers = (state: RootState) => state.users

export default usersSlice.reducer