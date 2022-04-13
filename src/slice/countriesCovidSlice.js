import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import configuredAxios from "../api/axios";

export const FETCH_COUNTRIES_COVID = createAsyncThunk(
  "covid/FETCH_COUNTRIES_COVID",
  async () => {
    try {
      const response = await configuredAxios.get("/npm-covid-data/");
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);

const initialState = {
  countriesCovid: [],
  countriesCovidStatus: "idle", // idle, loading, succeeded, failed,
  countriesCovidError: null,
};

const countriesCovidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FETCH_COUNTRIES_COVID.pending, (state, action) => {
        state.countriesCovidStatus = "loading";
      })
      .addCase(FETCH_COUNTRIES_COVID.fulfilled, (state, action) => {
        state.countriesCovidStatus = "succeeded";
        state.countriesCovid = action.payload;
      })
      .addCase(FETCH_COUNTRIES_COVID.rejected, (state, action) => {
        state.countriesCovidStatus = "failed";
        state.countriesCovidError = action.payload;
      });
  },
});

// Selector
export const selectCountriesCovid = (state) => state.covid.countriesCovid;
export const selectCountriesCovidStatus = (state) =>
  state.covid.countriesCovidStatus;
export const selectCountriesCovidError = (state) =>
  state.covid.countriesCovidError;

// Action
export const {} = countriesCovidSlice.actions;

// Reducer
export default countriesCovidSlice.reducer;
