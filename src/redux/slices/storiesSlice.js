import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { controllers } from "../../config/controllers";
import httpRequest from "../../utils/httpRequest";

const initialState = {
    stories: [],
    loading: false,
    error: ""
};

export const fetchStories = createAsyncThunk(
    "stories/fetch",
    async () => {
      return httpRequest(`${controllers.users}/user-story`);
    }
  );

  const storiesSlice = createSlice({
    name: "stories",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(fetchStories.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchStories.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.stories = payload?.data?.data;
        state.error = "";
      });
      builder.addCase(fetchStories.rejected, (state) => {
        state.loading = false;
        state.stories = [];
        state.error = "Error, Failed to load stories";
      });
    },
  });

  export default storiesSlice.reducer;
