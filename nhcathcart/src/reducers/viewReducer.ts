import { createSlice } from '@reduxjs/toolkit'

interface viewChoice {
  about: boolean;
  sandbox: boolean;
}

const initialState: viewChoice = {
  about: false,
  sandbox: false,
}

export const viewChoice = createSlice({
  name: 'viewChoice',
  initialState,
  reducers: {
    chooseAbout: (state) => {
        const newState = Object.assign({}, initialState);
        newState.about = true;
        return newState;
    },
    chooseSandBox: (state) => {
        const newState = Object.assign({}, initialState);
        newState.sandbox = true;
        return newState;
    },
  },
})



export const { chooseAbout, chooseSandBox } = viewChoice.actions

export default viewChoice.reducer