import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

console.log(categoriesSlice);

export default categoriesSlice.reducer;
