import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'
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
        createPost: {
            prepare: ({ title, content }: { title: string, content: string }) => {
                return {
                    payload: {
                        id: parseInt(nanoid()),
                        title,
                        content
                    }
                }

            },
            reducer: (state, action: PayloadAction<PostsState>) => {
                state.push(action.payload)
            },

        }

    }

})


// Action creators are generated for each case reducer function


export const { createPost } = postsSlice.actions

export const selectAllPosts = (state: RootState) => state.posts

export default postsSlice.reducer