import { createSlice } from '@reduxjs/toolkit'

interface viewChoice {
  about: boolean;
  sandbox: boolean;
  projects: boolean;
}

const initialState: viewChoice = {
  about: false,
  sandbox: false,
  projects: false,
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
    chooseProjects: (state) => {
      const newState = Object.assign({}, initialState);
      newState.projects = true;
      return newState;
  },
  },
})



export const { chooseAbout, chooseSandBox, chooseProjects } = viewChoice.actions

export default viewChoice.reducer