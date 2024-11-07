import { createSlice } from '@reduxjs/toolkit'

const counterslice = createSlice({
   name: 'counterSlice', //slice 이름 지정
   initialState: { value: 0 }, // state 초기값
   reducers: {
      //reducer
      up: (state, action) => {
         console.log(action)
         state.value += action.payload
      },
      down: (state, action) => {
         state.value -= action.payload
      },
   },
})

export default counterslice.reducer //리듀서를 내보냄

export const { up, down } = counterslice.actions //reducers 안에 정의한 up, down 함수를 내보냄
