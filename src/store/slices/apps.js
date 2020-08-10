import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  apps: [],
  showApps: true,
  loading: false,
  hasErrors: false,
  openIn: { value: "same-tab", label: "Same tab" }, // new-tab or "new-tab-background"
};

// A slice for apps with the three reducers
const appsSlice = createSlice({
  name: "apps",
  initialState,
  reducers: {
    getApps: (state) => {
      state.loading = true;
    },
    getAppsSuccess: (state, { payload }) => {
      state.apps = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getAppsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    toggleShowApps: (state) => {
      state.showApps = !state.showApps;
    },
    updateOpenIn: (state, { payload }) => {
      state.openIn = payload;
    },
  },
});

// Three actions generated from the slice
export const {
  getApps,
  getAppsSuccess,
  getAppsFailure,
  toggleShowApps,
  updateOpenIn,
} = appsSlice.actions;

// A selector
export const appsSelector = (state) => state.apps;

// The reducer
export default appsSlice.reducer;

// Asynchronous thunk action
export function fetchApps(sources, userSources) {
  return async (dispatch) => {
    dispatch(getApps());

    try {
      const showApps = sources.filter((source) => {
        return userSources.includes(source.id);
      });

      dispatch(getAppsSuccess(showApps.slice(0, 12)));
    } catch (error) {
      dispatch(getAppsFailure());
    }
  };
}
