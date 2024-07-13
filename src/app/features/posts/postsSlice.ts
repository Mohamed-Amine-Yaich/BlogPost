import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { sub } from 'date-fns'

export interface PostsState {
    id: number,
    title: string,
    content: string,
    userId?: number,
    date: string
}

const initialState: PostsState[] = [

    {
        id: 0,
        title: 'React native',
        content: 'mastering react native step by step',
        date: sub(new Date(), { minutes: 10 }).toISOString()


    },
    {
        id: 1,
        title: 'hello',
        content: 'hello from the other side',
        date: sub(new Date(), { minutes: 7 }).toISOString()


    },
    {
        id: 2,
        title: 'coffe',
        content: 'this coffe is awsome',
        date: sub(new Date(), { minutes: 5 }).toISOString()

    }

]


export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        createPost: {
            prepare: ({ title, content, userId }: { title: string, content: string, userId?: number }) => {
                return {
                    payload: {
                        id: parseInt(nanoid(3)),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString()
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