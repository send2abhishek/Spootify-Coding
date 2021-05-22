import { createSlice } from "@reduxjs/toolkit";
import axios from "app/axios";

export const spootify = createSlice({
  name: "spootify",
  initialState: {
    newRelease: [],
    featurePlaylist: [],
    category: [],
    errorMessage: undefined,
    dataFetchingStatus: false,
  },
  reducers: {
    setNewRelease: (state, action) => {
      state.newRelease = [...action.payload];
    },
    setFeaturePlaylist: (state, action) => {
      state.featurePlaylist = [...action.payload];
    },
    setcategory: (state, action) => {
      state.category = [...action.payload];
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setdataFetchingStatus: (state, action) => {
      state.dataFetchingStatus = action.payload;
    },
  },
});

export const {
  setNewRelease,
  setFeaturePlaylist,
  setcategory,
  setErrorMessage,
  setdataFetchingStatus,
} = spootify.actions;

export const getAllNewRelease = () => (dispatch) => {
  dispatch(setdataFetchingStatus(true));
  dispatch(setNewRelease([]));
  dispatch(setErrorMessage(undefined));
  axios
    .get("/browse/new-releases")
    .then((response) => {
      dispatch(setdataFetchingStatus(false));
      dispatch(setNewRelease(response.data.albums.items));
    })
    .catch((error) => {
      dispatch(setdataFetchingStatus(false));
      dispatch(setErrorMessage(error.response.data.error));
    });
};

export const getAllFeaturePlaylist = () => (dispatch) => {
  dispatch(setdataFetchingStatus(true));
  dispatch(setFeaturePlaylist([]));
  dispatch(setErrorMessage(undefined));
  axios
    .get("/browse/featured-playlists")
    .then((response) => {
      dispatch(setdataFetchingStatus(false));
      dispatch(setFeaturePlaylist(response.data.playlists.items));
    })
    .catch((error) => {
      dispatch(setdataFetchingStatus(false));
      dispatch(setErrorMessage(error.response.data.error));
    });
};

export const getAllCategory = () => (dispatch) => {
  dispatch(setdataFetchingStatus(true));
  dispatch(setcategory([]));
  dispatch(setErrorMessage(undefined));
  axios
    .get("/browse/categories")
    .then((response) => {
      dispatch(setdataFetchingStatus(false));
      dispatch(setcategory(response.data.categories.items));
    })
    .catch((error) => {
      dispatch(setdataFetchingStatus(false));
      dispatch(setErrorMessage(error.response.data.error));
    });
};

export default spootify.reducer;
