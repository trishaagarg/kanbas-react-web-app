import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        name: assignment.name,
        course: assignment.course,
        description: assignment.description,
        availableFrom: assignment.availableFrom,
        dueDate: assignment.dueDate,
        status: assignment.status || "Available",
        points: assignment.points || 100,
      };
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a) => a._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: updatedAssignment }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === updatedAssignment._id ? updatedAssignment : a
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;