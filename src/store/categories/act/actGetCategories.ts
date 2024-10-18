import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Response } from "src/models/ApiResponse";
import { Category } from "src/models/Category";

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<Response<Category[]>>(
        "http://localhost:5181/Api/v1/Category/GetAllCategories"
      );

      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        //  now here the error is type known
        rejectWithValue(error.response?.data.message || error.message);
      } else {
        rejectWithValue("An Unexpected error please try again later");
      }
    }
  }
);

export default actGetCategories;
