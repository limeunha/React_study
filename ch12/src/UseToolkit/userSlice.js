import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
   name: 'user', // slice이름지정
   initialState: { name: '', age: 0 }, //state 초기값
   reducers: {
      setName: (state, action) => {
         state.name = action.payload //state에 있는 name 값 payload변경
      },
      setAge: (state, action) => {
         state.age = action.payload //state에 있는 age값을 payload변경
      },
   },
})

export default userSlice.reducer //리듀서를 내보냄
export const { setName, setAge } = userSlice.actions //setName, setAge 내보냄
