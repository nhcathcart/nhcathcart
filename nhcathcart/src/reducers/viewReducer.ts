import { createSlice } from "@reduxjs/toolkit";

interface viewChoice {
  about: boolean;
  snippets: boolean;
  projects: boolean;
  visualizations: boolean;
  other: boolean;
  contact: boolean;
}

const initialState: viewChoice = {
  about: true,
  snippets: false,
  projects: false,
  other: false,
  visualizations: false,
  contact: false,
};
const resetState: viewChoice = {
  about: false,
  snippets: false,
  projects: false,
  other: false,
  visualizations: false,
  contact: false,
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
    chooseContact: (state) => {
      const newState = Object.assign({}, resetState);
      newState.contact = true;
      return newState;
    },
  },
});

export const { chooseAbout, chooseSnippets, chooseProjects, chooseOther, chooseVisualizations, chooseContact } =
  viewChoice.actions;

export default viewChoice.reducer;
