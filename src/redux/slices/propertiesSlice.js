import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { controllers } from "../../config/controllers";
import httpRequest from "../../utils/httpRequest";

const initialState = {
    properties: [],
    allProperties: [],
    loading: false,
    error: ""
};

export const fetchProperties = createAsyncThunk(
    "properties/fetch",
    async () => {
      return httpRequest(controllers.properties);
    }
  );

  const propertiesSlice = createSlice({
    name: "properties",
    initialState,
    reducers: {
      filterByPropertyCategory: (state, {payload}) => {
        console.log('payload', payload);
          state.properties = payload === "all" ? current(state.allProperties) : current(state.allProperties).filter((property) => property.propertyCategory === payload)
      },
  },
    extraReducers: (builder) => {
      builder.addCase(fetchProperties.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchProperties.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.properties = payload?.data?.data;
        state.allProperties = payload?.data?.data;
        state.error = "";
      });
      builder.addCase(fetchProperties.rejected, (state) => {
        state.loading = false;
        state.properties = [];
        state.error = "Error, Failed to load properties";
        state.allProperties = []
      });
    },
  });

  export default propertiesSlice.reducer;
  export const { filterByPropertyCategory } = propertiesSlice.actions;