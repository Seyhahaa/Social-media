import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState}  from '../store'

interface PostState {
  posts: any
}

const initialState: PostState = {
  posts: []
}

export const PostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
   
    setAllPosts: (state, action: PayloadAction<any>) => {
        state.posts = action.payload
    },
    setAddPost: (state, action: PayloadAction<any>) => {
        state.posts.unshift(action.payload);
    },
  },
})

export const { setAddPost,setAllPosts } = PostSlice.actions

export const getPosts = (state: RootState) => state.post

export default PostSlice.reducer