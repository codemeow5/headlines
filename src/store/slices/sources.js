import { createSlice } from "@reduxjs/toolkit";
import shuffle from "shuffle-array";
import { loadState } from "../../helpers/localStorage";

export const initialState = {
  sources: [],
  userSources: [],
  sidebarSources: [],
  initialized: false,
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
    updateInitializeState: (state) => {
      state.initialized = true;
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
  updateInitializeState,
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

      if (!state.sources.initialized) {
        const data = await window.localAgent.GlobalAppSettings();
        if (data !== null) {
          const globalAppSettings = JSON.parse(data);

          let userSources = shuffle(globalAppSettings.sources, { copy: true });
          userSources = userSources
            .filter((source) => source.category === "built-in")
            .slice(0, 12)
            .map((source) => source.id);
          dispatch(updateUserSources(userSources));

          dispatch(getSourcesSuccess(globalAppSettings.sources));
          dispatch(updateInitializeState());
        }
      } else {
        dispatch(getSourcesSuccess(state.sources.sources));
      }

    } catch (error) {
      dispatch(getSourcesFailure());
    }
  };
}
