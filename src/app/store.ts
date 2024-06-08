import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from './features/counter/counterSlice'
import postsSliceReducer from './features/posts/postsSlice'

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    posts: postsSliceReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch