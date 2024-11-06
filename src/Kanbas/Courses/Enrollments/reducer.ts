// src/Kanbas/Courses/Enrollments/reducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments } from "../../Database";

interface EnrollmentState {
  enrollments: { _id: string; user: string; course: string }[];
}

const initialState: EnrollmentState = {
  enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      const { userId, courseId } = action.payload;
      state.enrollments.push({ _id: new Date().getTime().toString(), user: userId, course: courseId });
    },
    unenrollCourse: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;