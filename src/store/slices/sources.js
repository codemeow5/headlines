import { createSlice } from "@reduxjs/toolkit";
import shuffle from "shuffle-array";
import { loadState } from "../../helpers/localStorage";

export const initialState = {
  sources: [],
  userSources: [],
  sidebarSources: [],
  loading: false,
  hasErrors: false,
};

// A slice for sources with the three reducers
const sourcesSlice = createSlice({
  name: "sources",
  initialState,
  reducers: {
    getSources: (state) => {
      state.loading = true;
    },
    getSourcesSuccess: (state, { payload }) => {
      state.sources = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getSourcesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    updateUserSources: (state, { payload }) => {
      state.userSources = payload;
    },
    updateSidebarSources: (state, { payload }) => {
      state.sidebarSources = payload;
    },
  },
});

// Three actions generated from the slice
export const {
  getSources,
  getSourcesSuccess,
  getSourcesFailure,
  updateUserSources,
  updateSidebarSources,
} = sourcesSlice.actions;

// A selector
export const sourcesSelector = (state) => state.sources;

// The reducer
export default sourcesSlice.reducer;

// Asynchronous thunk action
export function fetchSources() {
  return async (dispatch) => {
    dispatch(getSources());

    try {
      const state = await loadState();
      const userSourcesExist = state.sources.userSources.length > 0;

      if (!userSourcesExist) {
        let shuffledSources = shuffle(state.sources.sources, { copy: true });
        shuffledSources = shuffledSources
          .filter((source) => source.category === "built-in")
          .slice(0, 12)
          .map((source) => source.id);

        dispatch(updateUserSources(shuffledSources));
      }

      dispatch(getSourcesSuccess(state.sources.sources));
    } catch (error) {
      dispatch(getSourcesFailure());
    }
  };
}
