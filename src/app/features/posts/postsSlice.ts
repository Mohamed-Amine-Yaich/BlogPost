import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface PostsState {
    id: number,
    title: string,
    content: string,
}

const initialState: PostsState[] = [

    {
        id: 0,
        title: 'React native',
        content: 'mastering react native step by step'

    },
    {
        id: 1,
        title: 'hello',
        content: 'hello from the other side',
    },
    {
        id: 2,
        title: 'coffe',
        content: 'this coffe is awsome',
    }

]


export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        /*  addPosts: (state) => {
           
         },
         decrement: (state) => {
             state.value -= 1
         },
         incrementByAmount: (state, action: PayloadAction<number>) => {
             state.value += action.payload
         } */
    }

})


// Action creators are generated for each case reducer function


export const { } = postsSlice.actions

export const selectAllPosts = (state: RootState) => state.posts

export default postsSlice.reducer