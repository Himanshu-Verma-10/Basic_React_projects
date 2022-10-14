import { configureStore } from "@reduxjs/toolkit";
import jokeReducer from "./reducers/joke";

const store = configureStore({
  reducer: { jokes: jokeReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
