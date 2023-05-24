import { createSlice } from "@reduxjs/toolkit";

interface viewChoice {
  about: boolean;
  snippets: boolean;
  projects: boolean;
  visualizations: boolean;
  other: boolean;
}

const initialState: viewChoice = {
  about: true,
  snippets: false,
  projects: false,
  other: false,
  visualizations: false,
};
const resetState: viewChoice = {
  about: false,
  snippets: false,
  projects: false,
  other: false,
  visualizations: false,
};

export const viewChoice = createSlice({
  name: "viewChoice",
  initialState,
  reducers: {
    chooseAbout: (state) => {
      const newState = Object.assign({}, resetState);
      newState.about = true;
      return newState;
    },
    chooseSnippets: (state) => {
      const newState = Object.assign({}, resetState);
      newState.snippets = true;
      return newState;
    },
    chooseProjects: (state) => {
      const newState = Object.assign({}, resetState);
      newState.projects = true;
      return newState;
    },
    chooseOther: (state) => {
      const newState = Object.assign({}, resetState);
      newState.other = true;
      return newState;
    },
    chooseVisualizations: (state) => {
      const newState = Object.assign({}, resetState);
      newState.visualizations = true;
      return newState;
    },
  },
});

export const { chooseAbout, chooseSnippets, chooseProjects, chooseOther, chooseVisualizations } =
  viewChoice.actions;

export default viewChoice.reducer;
