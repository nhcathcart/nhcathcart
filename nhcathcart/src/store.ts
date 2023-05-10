import { configureStore } from '@reduxjs/toolkit'
import viewChoiceReducer from './reducers/viewReducer'

export const store = configureStore({
  reducer: {
    viewChoice: viewChoiceReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch