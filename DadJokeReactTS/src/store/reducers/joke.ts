import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IJoke } from "../../interfaces/Joke";

export const getJoke = createAsyncThunk("jokes/getJoke", async (thunkAPI) => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  }).then((data) => data.json());
  return response;
});

export const jokeSlice = createSlice({
  name: "jokes",
  initialState: {
    items: [] as IJoke[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getJoke.fulfilled, (state, action) => {
      state.items = [action.payload, ...state.items];
    });
  },
});

export const {} = jokeSlice.actions;

export default jokeSlice.reducer;
