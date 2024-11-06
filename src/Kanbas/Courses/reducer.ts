import { createSlice } from "@reduxjs/toolkit";
import { courses } from "./../Database";


const coursesSlice = createSlice({
  name: "courses",
  initialState: courses,
  reducers: {},
});

export default coursesSlice.reducer;