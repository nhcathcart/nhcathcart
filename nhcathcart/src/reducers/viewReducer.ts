import { createSlice } from '@reduxjs/toolkit'

interface viewChoice {
  about: boolean;
  snippets: boolean;
  projects: boolean;
}

const initialState: viewChoice = {
  about: false,
  snippets: false,
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
    chooseSnippets: (state) => {
        const newState = Object.assign({}, initialState);
        newState.snippets = true;
        return newState;
    },
    chooseProjects: (state) => {
      const newState = Object.assign({}, initialState);
      newState.projects = true;
      return newState;
  },
  },
})



export const { chooseAbout, chooseSnippets, chooseProjects } = viewChoice.actions

export default viewChoice.reducer