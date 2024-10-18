import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import { Category } from "src/models/Category";

interface ICategoriesState {
  records: Category[] | [];
  status: "idle" | "loading" | "succeeded" | "error";
  error: string | null;
}

const initialState: ICategoriesState = {
  records: [],
  status: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get categories
    builder
      .addCase(actGetCategories.pending, (state, _action) => {
        state.status = "loading";
      })
      .addCase(actGetCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.records = action.payload ?? [];
      })
      .addCase(actGetCategories.rejected, (state, action) => {
        state.status = "error";
        if (action.payload && typeof action.payload === "string") {
          state.error = action.payload ?? null;
        }
      });
  },
});

export default categoriesSlice.reducer;
