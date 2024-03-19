import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState}  from '../store'

interface AuthState {
  user: any
  loading: boolean
}

const initialState: AuthState = {
  user: null,
  loading: false
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   
    setUser: (state, action: PayloadAction<any>) => {
        state.user = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
        state.loading = action.payload
    },
  },
})

export const { setUser,setLoading } = AuthSlice.actions

export const getAuth = (state: RootState) => state.auth

export default AuthSlice.reducer