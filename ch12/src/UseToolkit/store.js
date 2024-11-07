import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice' //counterSlice.reducer (리듀서를 가져옴)
import userSlice from './userSlice'

// reducer를 store 저장
const store = configureStore({
   reducer: {
      counter: counterSlice,
      user: userSlice,
   },
})

export default store //store을 내보냄
